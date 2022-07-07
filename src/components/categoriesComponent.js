import { axiosInstance } from "../api/axiosConfig";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
export function CategoriesComponent() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/categories")
      .then((res) => {
        setCategories(...[res.data.categories]);
        toast.success("categories is fetched Successfully");
      })
      .catch((err) => toast.error("error while fetching categories"));
  }, []);
  return (
    <div className="">
      {categories.map((category) => (
        <span className="badge bg-primary fs-4">{category.name}</span>
      ))}
    </div>
  );
}
