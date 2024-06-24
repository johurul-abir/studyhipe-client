import { useEffect, useState } from "react";
import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import cookie from "js-cookie";
import { tokenEncode } from "../../helpers/Helper";
import { useDispatch, useSelector } from "react-redux";
import { accountActivitonByOtp } from "../../features/auth/authApiSlice";

const OtpModal = ({ otp, setOtp }) => {
  const [inputotp, setInputotp] = useState("");
  const dispatch = useDispatch();
  //login modal

  const { message, error } = useSelector((state) => state.auth);

  //handle optInput
  const handleOtpInput = (e) => {
    setInputotp((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    dispatch(
      accountActivitonByOtp({
        token: tokenEncode(cookie.get("activationToken")),
        otp: inputotp,
      })
    );
  };
  //console.log(tokenEncode(token));

  useEffect(() => {
    if (message) {
      setOtp(false);
    }
  }, [message, setOtp, error]);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <Modal show={otp} onHide={() => setOtp(false)}>
              <ModalHeader>
                <h4>Type OTP for active account</h4>
                <CloseButton onClick={() => setOtp(false)} />
              </ModalHeader>
              <ModalBody>
                <p>Send OTP to </p>
                <div className="otp-box">
                  <div className="otp-item">
                    <form onSubmit={handleOtpSubmit}>
                      <input
                        type="text"
                        name="otp"
                        className="form-control"
                        value={inputotp.otp}
                        onChange={handleOtpInput}
                      />

                      <button className="btn btn-success mt-2" type="submit">
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpModal;
