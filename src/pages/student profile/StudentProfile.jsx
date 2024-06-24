import { CardHeader } from "react-bootstrap";
import avater from "../../assets/images/avater.png";
import "./studentProfile.scss";
import {
  MdDashboard,
  MdLibraryBooks,
  MdMapsHomeWork,
  MdOutlineChangeCircle,
  MdSecurity,
} from "react-icons/md";
import { FaUserPlus, FaVideo } from "react-icons/fa";
import { CiLaptop } from "react-icons/ci";
import { IoBook, IoCheckmarkDoneCircle } from "react-icons/io5";
import { PiExamFill } from "react-icons/pi";
import { CiSaveDown2 } from "react-icons/ci";
import { MdOutlineDownloadDone } from "react-icons/md";
import { HiMiniBellAlert } from "react-icons/hi2";
import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutStudent } from "../../features/auth/authApiSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../features/auth/authSlice";

const StudentProfile = () => {
  //dispatch
  const dispatch = useDispatch();
  const location = useLocation();

  //selector
  const { auths, message, error } = useSelector((state) => state.auth);

  //handleLogout
  const handleLogout = () => {
    dispatch(logoutStudent());
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
    }
  }, [message, error, dispatch]);
  return (
    <>
      <div className="studentProfile">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-5">
            <div className="left-sidebar">
              <div className="card" style={{ minHeight: "90vh" }}>
                <CardHeader>
                  <h5>student dahsborard</h5>
                </CardHeader>
                <div className="card-body">
                  <div className="profile-info">
                    <img src={auths.photo ?? avater} alt="profile photo" />
                    <h5 className="m-0"> {auths.name} </h5>
                    <h6 style={{ fontSize: "14px", color: "gray" }}>
                      {auths.classname}
                    </h6>
                  </div>
                  <div className="dashborad-menu ">
                    <ul>
                      <Link to="/studentprofile">
                        <li
                          className={
                            location.pathname === "/studentprofile"
                              ? "active"
                              : undefined
                          }
                        >
                          <MdDashboard /> dashborad
                        </li>
                      </Link>

                      <Link to="myprofile">
                        <li
                          className={
                            location.pathname === "/studentprofile/myprofile"
                              ? "active"
                              : undefined
                          }
                        >
                          <FaUserPlus /> my profile
                        </li>
                      </Link>

                      <Link to="onlinecourses">
                        <li
                          className={
                            location.pathname ===
                            "/studentprofile/onlinecourses"
                              ? "active"
                              : undefined
                          }
                        >
                          <CiLaptop /> online course
                        </li>
                      </Link>

                      <Link to="liveclass">
                        <li
                          className={
                            location.pathname === "/studentprofile/liveclass"
                              ? "active"
                              : undefined
                          }
                        >
                          <FaVideo /> live class
                        </li>
                      </Link>

                      <Link to="leassonplan">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/leassonplan" && "active"
                          }
                        >
                          <MdLibraryBooks /> Lesson Plan
                        </li>
                      </Link>

                      <Link to="slybus">
                        <li
                          className={
                            location.pathname === "/studentprofile/slybus" &&
                            "active"
                          }
                        >
                          <IoBook /> Slybus
                        </li>
                      </Link>

                      <Link to="homework">
                        <li
                          className={
                            location.pathname === "/studentprofile/homework" &&
                            "active"
                          }
                        >
                          <MdMapsHomeWork /> homework
                        </li>
                      </Link>

                      <Link to="onlineexam">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/onlineexam" && "active"
                          }
                        >
                          <PiExamFill /> online exam
                        </li>
                      </Link>

                      <Link to="leaveof">
                        <li
                          className={
                            location.pathname === "/studentprofile/leaveof" &&
                            "active"
                          }
                        >
                          <IoCheckmarkDoneCircle /> apply leave
                        </li>
                      </Link>

                      <Link to="download">
                        <li
                          className={
                            location.pathname === "/studentprofile/download" &&
                            "active"
                          }
                        >
                          <CiSaveDown2 /> download
                        </li>
                      </Link>

                      <Link to="attentdance">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/attentdance" && "active"
                          }
                        >
                          <MdOutlineDownloadDone />
                          attendance
                        </li>
                      </Link>

                      <Link to="notice">
                        <li
                          className={
                            location.pathname === "/studentprofile/notice" &&
                            "active"
                          }
                        >
                          <HiMiniBellAlert /> notice
                        </li>
                      </Link>
                      <Link to="profile-setting">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/profile-setting" && "active"
                          }
                        >
                          <IoIosSettings /> Profile Setting
                        </li>
                      </Link>
                      <Link to="personal-security">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/personal-security" && "active"
                          }
                        >
                          <MdSecurity /> Contact & Security
                        </li>
                      </Link>
                      <Link to="change-password">
                        <li
                          className={
                            location.pathname ===
                              "/studentprofile/change-password" && "active"
                          }
                        >
                          <MdOutlineChangeCircle /> Change Password
                        </li>
                      </Link>
                      <Link onClick={handleLogout}>
                        <li>
                          <IoIosLogOut /> Logout
                        </li>
                      </Link>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9 col-md-8 col-sm-7">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
