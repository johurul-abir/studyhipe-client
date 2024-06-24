import { useEffect, useState } from "react";
import useForm from "../../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/notice/noticeSlice";
import { Link, Navigate } from "react-router-dom";
import { Card, CardBody, CardHeader, CloseButton } from "react-bootstrap";
import { createNotice } from "../../../../features/notice/noticeApiSlice";
const CreateNotice = () => {
  //navigation
  const [file, setFile] = useState();
  const dispatch = useDispatch();

  //use selector
  const { message, error, loading } = useSelector((state) => state.notice);

  //get all input
  const { input, handleInputChange, resetForm } = useForm({
    title: "",
    text: "",
    photo: "",
  });

  const handlefileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  //form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form_data = new FormData();
    form_data.append("title", input.title);
    form_data.append("text", input.text);
    form_data.append("noticephoto", file);

    dispatch(createNotice(form_data));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      resetForm();
      dispatch(setMessageEmpty());
      <Navigate to="/admin/allnotice" />;
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error, resetForm]);

  return (
    <>
      <div className="create-course my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-6">
              <Link
                to="/admin/allnotice"
                className="btn btn-sm btn btn-info mb-2"
              >
                All Notice
              </Link>
              <Card>
                <CardHeader>
                  <h3>Create a new Notice</h3>
                </CardHeader>
                <CardBody>
                  <form onSubmit={handleSubmit}>
                    <div className="item my-3">
                      <label>Notice title </label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        value={input.title}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Notice Text</label>
                      <textarea
                        type="text-area"
                        rows="4"
                        cols="20"
                        id="text"
                        name="text"
                        className="form-control w-100"
                        value={input.text}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="item my-3">
                      <label>Cover image</label>
                      <input
                        type="file"
                        name="noticephoto"
                        className="form-control"
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

export default CreateNotice;
