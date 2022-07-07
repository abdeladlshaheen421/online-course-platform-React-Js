export function RegisterButtonComponent(props) {
  const handleRegisterCourse = (e) => {
    console.log(e.target.value);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Register Course
      </button>
      <div className="modal" tabIndex="-1" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title mx-auto">
                <span className="badge bg-success fs-4">Register a new Course</span>
              </h5>
            </div>
            <div className="modal-body">
              <p>Do you want to register This Course ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                value={props.courseId}
                onClick={(e) => handleRegisterCourse(e)}
                className="btn btn-primary"
              >
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
