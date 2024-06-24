import { Link, Outlet, useLocation } from "react-router-dom";
import "./Admin.scss";
import { MdSpaceDashboard } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { FaLandmark } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { BiUser } from "react-icons/bi";
import { HiUserGroup } from "react-icons/hi2";
import { IoBagSharp } from "react-icons/io5";
import { PiStudentFill } from "react-icons/pi";
import { BsFillPostcardFill } from "react-icons/bs";
import { Dropdown } from "react-bootstrap";
import { IoMdNotifications } from "react-icons/io";

const Admin = () => {
  const location = useLocation();
  return (
    <>
      <div className="admin">
        <div className="row">
          <div className="col-md-4 col-lg-3 ">
            <div className="admin_menu">
              <div className="logo">
                <h2>StudyHipe Adimn</h2>
                <hr />
              </div>
              <div className="admin_menu_part">
                <ul>
                  <li className="ms-2">
                    <Link
                      to={location.pathname == "/admin" ? "/admin" : undefined}
                      className={
                        location.pathname == "/admin" ? "active" : undefined
                      }
                      id="dashbord"
                    >
                      {" "}
                      <MdSpaceDashboard /> Dashboard{" "}
                    </Link>
                  </li>
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        className="dropdown-btn"
                      >
                        <MdCastForEducation /> Course
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="addcourse">
                          Create new course
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="course">
                          All Course
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  <li className="exam_toggle ">
                    <ul className="exam">
                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="dropdown-btn"
                        >
                          <li className="bcs">
                            {" "}
                            <FaUserGraduate /> BCS{" "}
                          </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Add</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="dropdown-btn"
                        >
                          <li>
                            <FaLandmark /> University Admission
                          </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="dropdown-btn"
                        >
                          <li>
                            {" "}
                            <IoBagSharp /> Primary Job{" "}
                          </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="dropdown-btn"
                        >
                          <li>
                            <FaRegUser /> HSC Academic
                          </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>

                      <Dropdown>
                        <Dropdown.Toggle
                          id="dropdown-basic"
                          className="dropdown-btn"
                        >
                          <li>
                            <BiUser /> SSC Academic
                          </li>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </ul>
                  </li>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <HiUserGroup /> Team member
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="team"> New Team </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        {" "}
                        <PiStudentFill /> Student{" "}
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item as={Link} to="createstudent">
                        Add new student
                      </Dropdown.Item>

                      <Dropdown.Item as={Link} to="allstudent">
                        All Student
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <FaUserTie />
                        Teacher
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link as={Link} to="createteacher">
                          {" "}
                          Add new Teacher{" "}
                        </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="allteachers">
                        All Teachers
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <BsFillPostcardFill /> Create Blog{" "}
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link to="student"> Add new student </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>

                  <Dropdown>
                    <Dropdown.Toggle
                      id="dropdown-basic"
                      className="dropdown-btn"
                    >
                      <li>
                        <IoMdNotifications /> Notice
                      </li>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item>
                        <Link as={Link} to="createnotice">
                          {" "}
                          Add new Notice{" "}
                        </Link>{" "}
                      </Dropdown.Item>
                      <Dropdown.Item as={Link} to="allnotice">
                        All Notice
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </div>
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
