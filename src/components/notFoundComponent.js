export function NotFoundComponent() {
  return (
    <div className=" w-50 h-75 mx-auto my-2 rounded bg-light p-2">
      <img
        src="404.jpg"
        style={{ width: "100%", height: "500px" }}
        alt="notfound image"
      />
      <h1 className="text-center">
        <span className="badge bg-danger">404</span>
      </h1>
      <h2 className="text-center">
        <span className="badge bg-warning">Page Not Found</span>
      </h2>
    </div>
  );
}
