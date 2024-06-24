import { useEffect } from "react";
import { Card, CardBody, CardHeader } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import {
  getAllNotice,
  getSingleNotice,
} from "../../../features/notice/noticeApiSlice";
import { setMessageEmpty } from "../../../features/notice/noticeSlice";
import { toast } from "react-toastify";

const Notice = () => {
  const dispatch = useDispatch();

  const { notice, message, error } = useSelector((state) => state.notice);

  //get single Notice
  const handleSingleNotice = (id) => {
    dispatch(getSingleNotice(id));
  };

  useEffect(() => {
    dispatch(getAllNotice());
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
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-10">
            <Card>
              <CardHeader>
                <h1>All Notice</h1>
              </CardHeader>
              <CardBody>
                <div className="table-responsive">
                  <table className="table table-striped border">
                    <thead>
                      <tr className="text-center">
                        <th>#</th>
                        <th>Photo</th>
                        <th>title</th>
                        <th>text</th>
                      </tr>
                    </thead>
                    <tbody className="align-middle">
                      {notice?.length > 0
                        ? notice?.map((item, index) => {
                            return (
                              <tr key={index}>
                                <td> {index + 1} </td>
                                <td>
                                  <img
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "cover",
                                      borderRadius: "50%",
                                    }}
                                    src={item?.photo}
                                  />
                                </td>
                                <td style={{ width: "20%" }}>
                                  {" "}
                                  {item?.title}{" "}
                                </td>
                                <td>
                                  {" "}
                                  {item?.text} <br />
                                  <Link
                                    to={item._id}
                                    className="btn btn-sm btn btn-primary"
                                    onClick={() => handleSingleNotice(item._id)}
                                  >
                                    Read more
                                  </Link>
                                </td>
                              </tr>
                            );
                          })
                        : "Teacher Data not found"}
                    </tbody>
                  </table>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
