import "./Course.scss";

import { useEffect, useRef } from "react";
import { getAllCourses } from "../../features/course/courseApiSlice.js";
import { useDispatch, useSelector } from "react-redux";

const Course = () => {
  //use dispatch
  const dispatch = useDispatch();

  //useSelector
  const { courses } = useSelector((state) => state.course);

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const freeHeadingReff = useRef(null);
  const priceReff = useRef(null);

  return (
    <>
      <div className="course">
        <div className="container">
          <h3>Our Populer Course</h3>
          <div className="divider"></div>

          <div className="batch">
            {courses.map((item, index) => {
              return (
                <div className="card shadow course_card" key={index}>
                  <div className="card-body p-0 w-100 h-100">
                    <div className="coruse-box w-100">
                      <div className="course-content">
                        <div className="cover-img">
                          <span>{item.type}</span>
                          <img src={item.img} alt="" />
                        </div>

                        <div className="batch_item">
                          <div className="course-content">
                            <h2>{item.classof}</h2>
                            <h5>{item.title}</h5>

                            <div className="calss">
                              <p>Number of class:</p>
                              <p>{item.numberof}</p>
                            </div>

                            <div className="price" ref={priceReff}>
                              <h4>{item.offerprice}</h4>
                              <h4>
                                <del>{item.regularprice}</del>
                              </h4>
                            </div>
                            <div className="free">
                              <h4 ref={freeHeadingReff}>{item.free}</h4>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="course-btn">
                        <a href="">
                          <button className="btn btn-info w-100">
                            {" "}
                            Enroll Now{" "}
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Course;
