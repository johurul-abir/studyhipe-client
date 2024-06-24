import { StudentReview_Data } from "../../faker/StudentRevies";
import "./StudentReview.scss";

const StudentReview = () => {
  return (
    <>
      <div className="studentRview">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="student_review_header">
                <h2>Students Review</h2>
                <div className="divider"></div>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempore ex deserunt praesentium blanditiis velit voluptatem
                  nihil accusantium temporibus eveniet, a voluptates, magnam,
                  rem laborum cum doloribus quia? Quia, distinctio blanditiis!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {StudentReview_Data.map((item, index) => {
              return (
                <div className="col-md-12 col-lg-6" key={index}>
                  <div className="student_revies_item">
                    <div className="card">
                      <div className="card-box review_box">
                        <img src={item.photo} alt="" />
                        <div className="review_content">
                          <p>{item.txt}</p>
                          <h3>{item.name}</h3>
                          <h5>{item.group}</h5>
                        </div>
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

export default StudentReview;
