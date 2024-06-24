import "./Topbar.scss";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
//import LoginModal from "../loginModal/loginModal";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../features/auth/authSlice.js";
import RegModal from "../regModal/RegModal.jsx";
import LoginModal from "../loginModal/LoginModal.jsx";
import OtpModal from "../otpModal/OtpModal.jsx";

const Topbar = () => {
  //call dispatch
  const dispatch = useDispatch();

  //all student selector
  const { message, error } = useSelector((state) => state.auth);

  //login modal
  const [login_modal, set_login_modal] = useState(false);

  //OTP modal
  const [otp, setOtp] = useState(false);

  //Register Modal
  const [reg_modal, set_reg_modal] = useState(false);

  //use effect
  useEffect(() => {
    if (message) {
      toast.success(message);
      set_reg_modal(false);
      set_login_modal(false);
      dispatch(setMessageEmpty());
    }

    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [message, error, dispatch]);

  return (
    <>
      {/* login Modal */}
      <LoginModal login_modal={login_modal} set_login_modal={set_login_modal} />

      {/* Register modal */}
      <RegModal reg_modal={reg_modal} set_reg_modal={set_reg_modal} />

      {/* OTP MODAL */}
      <OtpModal otp={otp} setOtp={setOtp} />

      <div className="topbar">
        <div className="container top_box">
          <div className="top-con">
            <div className="phone">
              <ul>
                <li>
                  <CiPhone /> 01959609081
                </li>
                <li>
                  <CiPhone /> 01641372717
                </li>
              </ul>
            </div>
            <div className="email">
              <p>
                <HiOutlineMail /> studyhipe@gmail.com
              </p>
            </div>
          </div>

          <div className="top-reg">
            <div className="top-btn">
              <button className="btn-reg" onClick={() => set_reg_modal(true)}>
                Register Now
              </button>
              {/* <Link to="/register" className="btn-reg">
                {" "}
                Register Now
              </Link> */}
              <button onClick={() => set_login_modal(true)}> Login </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Topbar;
