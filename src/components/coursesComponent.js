import { axiosInstance } from "../api/axiosConfig";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
export function CoursesComponent() {
  const columns = [
    { name: "Name", selector: (course) => course.name },
    { name: "Description", selector: (course) => course.description },
    { name: "Points", selector: (course) => course.points },
    {
      selector: (course) => course.id,
      cell: (course) => (
        <div className="w-100 text-center">
          <Link to={`course/${course.id}`} className="btn btn-outline-primary">
            Register course
          </Link>
        </div>
      ),
    },
  ];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    axiosInstance
      .get("/courses")
      .then((res) => {
        setCourses(...[res.data.courses]);
        toast.success("data fetched Successfully");
      })
      .catch((err) => toast.error("error with getting data"));
  }, []);
  return (
    <div className="p-3">
      <DataTable
        title="Courses"
        columns={columns}
        data={courses}
        striped
        defaultSortFieldId="Name"
        highlightOnHover
        pagination
        responsive
        direction="auto"
      />
      <ToastContainer />
    </div>
  );
}
