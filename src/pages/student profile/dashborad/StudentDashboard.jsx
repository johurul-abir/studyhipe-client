import { Card, CardBody, CardHeader } from "react-bootstrap";

const StudentDashboard = () => {
  return (
    <>
      <div className="dashborad">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="notice-box">
                <Card>
                  <CardHeader style={{ background: "red", color: "white" }}>
                    Latest Notice
                  </CardHeader>
                  <CardBody>
                    <h5 className="notice_title"> Eid holiday </h5>
                  </CardBody>
                </Card>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
