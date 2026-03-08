import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-api-client";

const AddCategory = () => {

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try{
      await authApiClient.post("/categories/", data);
      alert("Category added successfully");
    }
    catch(error){
      console.log(error);
      alert("Category already exists");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">

      <h2 className="text-xl font-semibold mb-4">
        Add Category
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">

        <input
          {...register("name", { required:true })}
          placeholder="Category Name"
          className="input input-bordered w-full"
        />

        <textarea
          {...register("description")}
          placeholder="Description"
          className="textarea textarea-bordered w-full"
        />

        <button className="btn btn-primary w-full">
          Add Category
        </button>

      </form>

    </div>
  );
};

export default AddCategory;