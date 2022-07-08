export function UnAuthorizedComponent() {
  return (
    <div className=" w-50 h-75 mx-auto my-2 rounded bg-light p-2">
      <img
        src="401.jpg"
        style={{ width: "100%", height: "500px" }}
        alt="unautorized image"
      />
      <h1 className="text-center">
        <span className="badge bg-danger">401</span>
      </h1>
      <h2 className="text-center">
        <span className="badge bg-warning">Not this time, access Denied!</span>
      </h2>
    </div>
  );
}
