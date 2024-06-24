import "./home.scss";

import banner_img from "../../assets/images/banner.jpg";
import Course from "../../components/course/Course";
import Support from "../../components/support/Support";
import StudentReview from "../../components/student review/StudentReview";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoNotificationsSharp } from "react-icons/io5";
import { PiStudentDuotone } from "react-icons/pi";
import Teacher from "../teacher/Teacher";
import RegModal from "../../components/regModal/RegModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  //Register Modal
  const [reg_modal, set_reg_modal] = useState(false);
  return (
    <>
      <RegModal reg_modal={reg_modal} set_reg_modal={set_reg_modal} />

      <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="banner_left">
                <div
                  className="banner_content"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <h1>Admission going on SSC & HSC new Batch </h1>
                  <h5>According to 2023 slybus Educatation system</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatum laudantium veniam ipsam animi iure. Quibusdam
                    voluptatem expedita a quisquam quae.
                  </p>

                  <button
                    className="btn btn-info w-25"
                    onClick={() => set_reg_modal(true)}
                  >
                    Admission Now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div
                className="banner_right"
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                <img src={banner_img} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="services-home">
        <div className="container">
          <div className="row">
            <div className="service-box">
              <div className="col-md-4">
                <div
                  className="item"
                  data-aos="fade-right"
                  data-aos-duration="3000"
                >
                  <i className="item-icon">
                    <FaChalkboardTeacher />
                  </i>
                  <h3>our teachers</h3>
                  <div className="line"></div>
                  <p>Choose by name, specialty, city and more.</p>
                  <Link to="/teacher">
                    <button>
                      see our teacher <MdKeyboardArrowRight />{" "}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="item"
                  style={{ background: "#232665" }}
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  <i className="item-icon">
                    <IoNotificationsSharp />
                  </i>
                  <h3>our latest notice</h3>
                  <div className="line"></div>
                  <p style={{ color: "white" }}>
                    Choose by name, specialty, city and more.
                  </p>
                  <Link to="/notice">
                    <button style={{ color: "#94a3b8" }}>
                      see Notice
                      <MdKeyboardArrowRight />{" "}
                    </button>
                  </Link>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="item"
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <i className="item-icon">
                    <PiStudentDuotone />
                  </i>
                  <h3>Admision Now</h3>
                  <div className="line"></div>
                  <p>Choose by name, specialty, city and more.</p>
                  <button onClick={() => set_reg_modal(true)}>
                    admision now <MdKeyboardArrowRight />{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <Course />
      <Support />
      <StudentReview />
      <Teacher />
    </>
  );
};

export default Home;
