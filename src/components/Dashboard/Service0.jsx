import { useEffect, useState } from "react";
import useAuthContext from "../../hooks/useAuthContext";
import apiClient from "../../services/api-client";

const Service0 = () => {
  const { user } = useAuthContext();
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

 //Modal Section
  const [editingService, setEditingService] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    price: "",
    delivery_time: "",
    category: "",
  });
  const [updating, setUpdating] = useState(false);

  // useEffect Section
  useEffect(() => {
    const fetchData = async () => {
      try {
        const tokens = JSON.parse(localStorage.getItem("authTokens"));

        // Fetch services
        const servicesRes = await apiClient.get("/seller/services/", {
          headers: { Authorization: `JWT ${tokens?.access}` },
        });
        setServices(servicesRes.data);

        // Fetch categories
        const categoriesRes = await apiClient.get("/categories/");
        setCategories(categoriesRes.data);
      } catch (error) {
        console.error(error);
        alert("Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (!user) return <p>Loading user...</p>;
  if (loading) return <p>Loading services...</p>;

  // Delete service
  const handleDelete = async (serviceId) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;
    try {
      const tokens = JSON.parse(localStorage.getItem("authTokens"));
      await apiClient.delete(`/seller/services/${serviceId}/`, {
        headers: { Authorization: `JWT ${tokens?.access}` },
      });
      setServices((prev) => prev.filter((s) => s.id !== serviceId));
      alert("Service deleted successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to delete service");
    }
  };

  // Modal Open and Edit Section
  const openEdit = (service) => {
    setEditingService(service.id);
    setEditForm({
      title: service.title,
      description: service.description,
      price: service.price,
      delivery_time: service.delivery_time,
      category: service.category?.id || "",
    });
  };

  // Update Section
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      setUpdating(true);
      const tokens = JSON.parse(localStorage.getItem("authTokens"));

      const payload = {};
      Object.keys(editForm).forEach((key) => {
        if (editForm[key] !== "" && editForm[key] !== null) payload[key] = editForm[key];
      });

      const res = await apiClient.patch(
        `/seller/services/${editingService}/`,
        payload,
        {
          headers: { Authorization: `JWT ${tokens?.access}` },
        }
      );

      setServices((prev) =>
        prev.map((s) => (s.id === editingService ? res.data : s))
      );
      setEditingService(null);
      alert("Service updated successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to update service");
    } finally {
      setUpdating(false);
    }
  };

  return (
    <div>
      {services.length === 0 ? (
        <p>No services found</p>
      ) : (
        <ul className="list bg-base-100">
          {services.map((service) => (
            <li
              key={service.id}
              className="p-4 rounded-lg shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center mb-4"
            >
              <div className="flex gap-2 mb-2 md:mb-0">
                {service.images?.map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt={service.title}
                    width="100"
                    className="rounded"
                  />
                ))}
              </div>

              <div className="flex-1 md:ml-4">
                <div className="font-semibold text-xl text-green-600">{service.title}</div>
                <div className="font-normal text-blue-600">
                  {service.description || "-"}
                </div>
                <p className="text-sm text-orange-600 mt-1">
                  Price: ${service.price} | Delivery: {service.delivery_time} days |{" "}
                  Category: {service.category?.name || "-"} | Seller: {service.seller?.name || "-"}
                </p>
              </div>

              <div className="flex flex-col gap-1 mt-2 md:mt-0">
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => openEdit(service)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-ghost btn-sm"
                  onClick={() => handleDelete(service.id)}
                >
                  Delete
                </button>
              </div>

              {editingService === service.id && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
                  <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                    <h2 className="font-bold mb-4">Edit Service</h2>
                    <form onSubmit={handleUpdate} className="flex flex-col gap-2">
                      <input
                        type="text"
                        placeholder="Title"
                        value={editForm.title}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, title: e.target.value }))
                        }
                        className="input input-bordered w-full"
                        required
                      />
                      <textarea
                        placeholder="Description"
                        value={editForm.description}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, description: e.target.value }))
                        }
                        className="textarea textarea-bordered w-full"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Price"
                        value={editForm.price}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, price: e.target.value }))
                        }
                        className="input input-bordered w-full"
                        required
                      />
                      <input
                        type="number"
                        placeholder="Delivery Time (days)"
                        value={editForm.delivery_time}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, delivery_time: e.target.value }))
                        }
                        className="input input-bordered w-full"
                        required
                      />
                      <select
                        value={editForm.category}
                        onChange={(e) =>
                          setEditForm((prev) => ({ ...prev, category: e.target.value }))
                        }
                        className="input input-bordered w-full"
                        required
                      >
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.id}>
                            {cat.name}
                          </option>
                        ))}
                      </select>

                      <div className="flex justify-end gap-2 mt-2">
                        <button
                          type="button"
                          className="btn btn-ghost"
                          onClick={() => setEditingService(null)}
                          disabled={updating}
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={updating}
                        >
                          {updating ? "Saving..." : "Save"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Service0;