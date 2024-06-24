import { CardHeader, CardBody, CloseButton } from "react-bootstrap";
import useForm from "../../../../hooks/useForm";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Teacher.scss";
import { createTeacher } from "../../../../features/teacher/teacherApiSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { setMessageEmpty } from "../../../../features/teacher/teacherSlice";

const CreateTeacher = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { message, error, loading } = useSelector((state) => state.teacher);

  const [file, setFile] = useState();
  const { input, handleInputChange, resetForm } = useForm({
    name: "",
    phone: "",
    email: "",
    subject: "",
  });

  const handlefileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("name", input.name);
    form_data.append("phone", input.phone);
    form_data.append("email", input.email);
    form_data.append("subject", input.subject);
    form_data.append("teacherphoto", file);

    dispatch(createTeacher(form_data));
  };

  useEffect(() => {
    if (message) {
      resetForm();
      setFile(null);
      navigate("/admin/allteachers");
      dispatch(setMessageEmpty());
    } else {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, navigate, message, error, resetForm]);

  return (
    <>
      <div className="container mt-3">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6">
            <div className="card">
              <CardHeader>
                <h3>Create new Teacher</h3>
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
                    <label> Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={input.phone}
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
                    <label> Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={input.subject}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="item my-3">
                    <label> Photo</label>
                    <input
                      type="file"
                      className="form-control"
                      name="teacherphoto"
                      onChange={handlefileUpload}
                    />
                    <div className="previmg mt-2">
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
                    <button className="btn btn-success" type="submit">
                      {loading ? "Loading.." : "Add new Teacher"}
                    </button>
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

export default CreateTeacher;
