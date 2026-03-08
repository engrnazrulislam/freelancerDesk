import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [serviceId, setServiceId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch Categories
  useEffect(() => {
  apiClient.get("/categories/").then((res) => {
    setCategories(res.data);
  });
}, []);

  // Submit Service
const handleServiceAdd = async (data) => {
  try {
    // Build payload according to DRF ServiceSerializer
    const payload = {
      title: data.title,
      description: data.description,
      price: Number(data.price),               // ensure number
      delivery_time: Number(data.delivery_time), // ensure number
      is_active: true,                          // optional, set True
      category_id: data.category,               // must match serializer
    };

    // POST request to create service
    const serviceRes = await authApiClient.post("/seller/services/", payload);

    setServiceId(serviceRes.data.id);
    alert("Service created successfully! Now upload images.");

  } catch (error) {
    console.log("Error adding service", error.response?.data || error);
    alert("Failed to add service. Check console for details.");
  }
};

  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    const preview = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(preview);
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!images.length) {
      alert("Please select images.");
      return;
    }

    setLoading(true);

    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);

        await authApiClient.post(
          `/seller/services/${serviceId}/images/`,
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
      }

      alert("Images uploaded successfully");
      setPreviewImages([]);
      setImages([]);
    } catch (error) {
      console.log("Error uploading image", error);
      alert("Failed to upload images. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Service</h2>

      {!serviceId ? (
        <form onSubmit={handleSubmit(handleServiceAdd)} className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="block text-sm font-medium">Title</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="input input-bordered w-full"
              placeholder="Service Title"
            />
            {errors.title && (
              <p className="text-red-500 text-xs">{errors.title.message}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            />
            {errors.description && (
              <p className="text-red-500 text-xs">{errors.description.message}</p>
            )}
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="number"
              step="0.01"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be greater than 0" },
              })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          {/* Category Select */}
          <div>
          <label className="block text-sm font-medium">
            Category
          </label>

          <select
            {...register("category", { required: true })}
            className="select select-bordered w-full"
          >

            <option value="">
              Select Category
            </option>

              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}

            </select>

            {errors.category && (
              <p className="text-red-500 text-xs">
                Category is required
              </p>
            )}
          </div>
          

          {/* Delivery Time */}
          <div>
            <label className="block text-sm font-medium">Delivery Time (Days)</label>
            <input
              type="number"
              {...register("delivery_time", {
                required: "Delivery time is required",
                min: { value: 1, message: "Minimum 1 day required" },
              })}
              className="input input-bordered w-full"
              placeholder="Enter delivery time in days"
            />
            {errors.delivery_time && (
              <p className="text-red-500 text-xs">{errors.delivery_time.message}</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Service
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Upload Service Images</h3>

          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange}
          />

          {previewImages.length > 0 && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {previewImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt="Preview"
                  className="w-16 h-16 rounded-md object-cover"
                />
              ))}
            </div>
          )}

          <button
            onClick={handleUpload}
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Uploading images..." : "Upload Images"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddService;