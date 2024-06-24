import { Card, CardBody, CardHeader } from "react-bootstrap";
import "./CreateCourse.scss";
import { useEffect, useState } from "react";
import useForm from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { createCourses } from "../../../../features/course/courseApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/course/courseSlice";
import { useNavigation } from "react-router-dom";

const CreateCorse = () => {
  //navigation

  const [file, setFile] = useState();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const navigate = useNavigation();

  //use selector
  const { message, error, loading } = useSelector((state) => state.course);

  //get all input
  const { input, handleInputChange, resetForm } = useForm({
    type: "",
    classof: "",
    title: "",
    numberof: "",
    regularprice: "",
    offerprice: "",
    free: "",
    img: "",
  });

  const handleCheck = () => {
    setCheck(!check);
  };

  const handlefileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("type", input.type);
    form_data.append("classof", input.classof);
    form_data.append("title", input.title);
    form_data.append("numberof", input.numberof);
    form_data.append("regularprice", input.regularprice);
    form_data.append("offerprice", input.offerprice);
    form_data.append("free", check ? "Free" : "");
    form_data.append("coursephoto", file);
    dispatch(createCourses(form_data));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      dispatch(setMessageEmpty());
      navigate("/admin/course");
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  });

  return (
    <>
      <div className="create-course my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <Card>
                <CardHeader>
                  <h3>Create a new course</h3>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="item my-3">
                      <p>Course type</p>
                      <label className="me-4">
                        Online
                        <input
                          type="radio"
                          name="type"
                          className="ms-1"
                          value="Online"
                          onChange={handleInputChange}
                        />
                      </label>
                      <label className="mr-2">
                        Offline
                        <input
                          type="radio"
                          name="type"
                          className="ms-1"
                          value="Offline"
                          onChange={handleInputChange}
                        />
                      </label>
                    </div>

                    <div className="item my-3">
                      <label>For class </label>
                      <input
                        type="text"
                        name="classof"
                        className="form-control"
                        value={input.value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Course title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={input.value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Number of class</label>
                      <input
                        type="text"
                        name="numberof"
                        className="form-control"
                        value={input.value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Cours regular price</label>
                      <input
                        type="text"
                        name="regularprice"
                        className="form-control"
                        value={input.value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Course offer price</label>
                      <input
                        type="text"
                        name="offerprice"
                        className="form-control"
                        value={input.value}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <p>Cours free </p>
                      <label>
                        Free &nbsp;
                        <input type="checkbox" onClick={handleCheck} />
                      </label>
                    </div>

                    <div className="item my-3">
                      <label>Cover image</label>
                      <input
                        type="file"
                        name="coursephoto"
                        className="form-control"
                        onChange={handlefileUpload}
                      />
                    </div>
                    <div className="item my-3">
                      <button className="btn btn-success" type="submit">
                        {loading ? "Loading. . ." : "Add Course"}
                      </button>
                    </div>
                  </form>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateCorse;
