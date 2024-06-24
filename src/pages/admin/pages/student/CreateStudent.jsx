import { useEffect, useState } from "react";
import { CardBody, CardHeader, CloseButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createStudent } from "../../../../features/student/studentApiSlice";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import useForm from "../../../../hooks/useForm";
import "./student.scss";
import { setMessageEmpty } from "../../../../features/teacher/teacherSlice";

const CreateNewStudent = () => {
  //dispatch
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.student);

  //useNavigate
  const navigate = useNavigate();

  //file state
  const [file, setFile] = useState();

  //fet form data state
  const { input, handleInputChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    phone: "",
    classname: "",
    location: "",
  });

  //file submit
  const handlefileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  //form submit
  const handleFormSubmit = (e) => {
    e.preventDefault();

    const form_data = new FormData();

    form_data.append("name", input.name);
    form_data.append("email", input.email);
    form_data.append("password", input.password);
    form_data.append("phone", input.phone);
    form_data.append("classname", input.classname);
    form_data.append("location", input.location);
    form_data.append("studentphoto", file);

    //check unick phone
    dispatch(createStudent(form_data));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      navigate("/admin/allstudent");
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error, resetForm, navigate]);

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <Link
              to={"/admin/allstudent"}
              type="button"
              className="btn btn-sm btn-info mb-1"
            >
              {" "}
              All student
            </Link>
            <div className="card">
              <CardHeader>
                <h3>Create new student</h3>
              </CardHeader>
              <CardBody>
                <form action="" onSubmit={handleFormSubmit}>
                  <div className="item my-3">
                    <label> Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={input.name}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label> Email</label>
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      value={input.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={input.phone}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label>Password</label>
                    <input
                      type="text"
                      className="form-control"
                      name="password"
                      value={input.password}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label> Class</label>
                    <input
                      type="text"
                      className="form-control"
                      name="classname"
                      value={input.classname}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label> Localtion</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      value={input.location}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label> Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      name="studentphoto"
                      onChange={handlefileUpload}
                    />
                    <div className="img_previw">
                      {file && (
                        <>
                          <img
                            style={{ width: "100px" }}
                            src={URL.createObjectURL(file)}
                          />
                          <CloseButton onClick={() => setFile(null)} />
                        </>
                      )}
                    </div>
                  </div>
                  <div className="item mt-3 text-center">
                    <button className="btn btn-success"> Submit Now </button>
                  </div>
                </form>
              </CardBody>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewStudent;
