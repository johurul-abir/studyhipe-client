import { useState } from "react";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loingStudent } from "../../features/auth/authApiSlice";

const LoginModal = ({ login_modal, set_login_modal }) => {
  const dispatch = useDispatch();
  //login form input data
  const [loginInput, setLoginInput] = useState({
    auth: "",
    password: "",
  });
  //login user
  const handleLogin = (e) => {
    setLoginInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //login submit
  const hanldeSubmitLogin = () => {
    dispatch(loingStudent(loginInput));
  };

  return (
    <>
      <div className="contaier">
        <div className="row">
          <div className="col-md-6">
            <Modal show={login_modal}>
              <ModalHeader>
                <h3>LogIn</h3>
                <CloseButton onClick={() => set_login_modal(false)} />
              </ModalHeader>
              <ModalBody>
                <div className="item my-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone or email"
                    name="auth"
                    onChange={handleLogin}
                    value={loginInput.auth}
                  />
                </div>

                <div className="item my-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleLogin}
                    value={loginInput.password}
                  />
                </div>
                <div className="item my-3 text-center">
                  <button
                    className="btn btn-success"
                    onClick={hanldeSubmitLogin}
                  >
                    Login now
                  </button>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModal;
