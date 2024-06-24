import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import evatar from "../../../../../public/149071.png";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/notice/noticeSlice";
import Swal from "sweetalert2";
import {
  deleteNotice,
  getAllNotice,
} from "../../../../features/notice/noticeApiSlice";

const AllNotice = () => {
  const [singleModal, setSingleModal] = useState(false);

  const [singleData, setSingleData] = useState();

  const dispatch = useDispatch();

  const { notice, message, error } = useSelector((state) => state.notice);

  //get single Teacher
  const handleSingleTeacher = (id) => {
    setSingleModal(true);
    const data = notice.find((item) => item._id === id);
    setSingleData(data);
  };

  //Delete Data
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Delete this teacher??",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteNotice(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
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
      {/* single teacher modal */}
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Modal show={singleModal}>
              <ModalHeader>
                <h2>Single Notice</h2>
                <CloseButton onClick={() => setSingleModal(false)} />
              </ModalHeader>
              <ModalBody className="w-100">
                <div className="img-box text-center">
                  <img
                    style={{ width: "100%", borderRadius: "5px" }}
                    src={singleData?.photo}
                    alt=""
                  />
                </div>
                <div className="content-box pt-3">
                  <ul className="p-2">
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">{singleData?.title}</p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">{singleData?.text}</p>
                    </li>
                  </ul>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      <div className="container my-2">
        <div className="row justify-content-center">
          <div className="col-md-12 col-lg-12 col-xl-10">
            <Link
              to="/admin/createnotice"
              className="btn btn-sm btn btn-info my-3"
            >
              Create Notice
            </Link>
            <Card>
              <CardHeader>
                <h1>All Notices</h1>
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
                        <th>Action</th>
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
                                    src={item?.photo ?? evatar}
                                  />
                                </td>
                                <td style={{ width: "20%" }}>
                                  {" "}
                                  {item?.title}{" "}
                                </td>
                                <td> {item?.text} </td>

                                <td style={{ width: "130px" }}>
                                  <button
                                    className="btn btn-sm btn btn-primary"
                                    onClick={() =>
                                      handleSingleTeacher(item?._id)
                                    }
                                  >
                                    <FaEye />
                                  </button>
                                  <button className="btn btn-sm btn btn-info mx-2">
                                    <CiEdit />
                                  </button>
                                  <button
                                    className="btn btn-sm btn btn-danger"
                                    onClick={() => handleDelete(item?._id)}
                                  >
                                    <FaTrashAlt />
                                  </button>
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

export default AllNotice;
