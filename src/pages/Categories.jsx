import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Link } from "react-router";
import { TbCategoryFilled } from "react-icons/tb";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await apiClient.get("categories/");
        setCategories(res.data);
      } catch (error) {
        console.error("Error fetching categories", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">

      <h1 className="text-3xl font-bold text-center mb-10">
        All Categories
      </h1>

      <div>
        {categories.map((category) => (
        <div key={category.id} className="mb-4 card bg-base-100 shadow-md">
            <ul className="list bg-base-100 rounded-box shadow-md">
            <li className="list-row flex-row justify-between items-center">
              <TbCategoryFilled />
              <div>
                <div>{category.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">{category.description}</div>
              </div>
              <button className="btn btn-ghost">
                Edit
              </button>
              <button className="btn btn-ghost">
                Delete
              </button>
            </li>
            </ul>
        </div>
        ))}

      </div>
    </div>
  );
};

export default Categories;

