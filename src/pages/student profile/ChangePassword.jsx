import { Card, CardBody, CardHeader } from "react-bootstrap";
import useForm from "../../hooks/useForm";
import { IoMdEye, IoIosEyeOff } from "react-icons/io";
import "./studentProfile.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAuthPass } from "../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";

const ChangePassword = () => {
  const dispatch = useDispatch();

  const { message, error } = useSelector((state) => state.auth);

  const [seepass, setSeepass] = useState({
    oldpass: false,
    newpass: false,
    conpass: false,
  });

  const { input, handleInputChange } = useForm({
    oldpassword: "",
    newpassword: "",
    conpass: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeAuthPass(input));
    //resetForm();
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <CardHeader>
                <h3>Change Password</h3>
              </CardHeader>
              <CardBody>
                <form>
                  <div className="item my-3">
                    <label>Old Password </label>
                    <div className="input_group">
                      <input
                        type={seepass.oldpass ? "text" : "password"}
                        className="form-control"
                        name="oldpassword"
                        value={input.oldpassword}
                        onChange={handleInputChange}
                      />
                      <i
                        onClick={() =>
                          setSeepass((prevState) => ({
                            ...prevState,
                            oldpass: !prevState.oldpass,
                          }))
                        }
                      >
                        {seepass.oldpass ? (
                          <IoMdEye />
                        ) : input.oldpassword ? (
                          <IoIosEyeOff />
                        ) : (
                          <IoMdEye />
                        )}
                      </i>
                    </div>
                  </div>

                  <div className="item my-3">
                    <label>New Password </label>
                    <div className="input_group">
                      <input
                        type={seepass.newpass ? "text" : "password"}
                        className="form-control"
                        name="newpassword"
                        value={input.newpassword}
                        onChange={handleInputChange}
                      />

                      <i
                        onClick={() =>
                          setSeepass((prevState) => ({
                            ...prevState,
                            newpass: !prevState.newpass,
                          }))
                        }
                      >
                        {seepass.newpass ? (
                          <IoMdEye />
                        ) : input.newpassword ? (
                          <IoIosEyeOff />
                        ) : (
                          <IoMdEye />
                        )}
                      </i>
                    </div>
                  </div>

                  <div className="item my-3">
                    <label>Confirm Password </label>
                    <div className="input_group">
                      <input
                        type={seepass.confpass ? "text" : "password"}
                        className="form-control"
                        name="conpass"
                        value={input.conpass}
                        onChange={handleInputChange}
                      />
                      <i
                        onClick={() =>
                          setSeepass((prevState) => ({
                            ...prevState,
                            confpass: !prevState.confpass,
                          }))
                        }
                      >
                        {seepass.confpass ? (
                          <IoMdEye />
                        ) : input.conpass ? (
                          <IoIosEyeOff />
                        ) : (
                          <IoMdEye />
                        )}
                      </i>
                    </div>
                  </div>

                  <div className="item my-3">
                    <button className="btn btn-success" onClick={handleSubmit}>
                      Save Change
                    </button>
                  </div>
                </form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
