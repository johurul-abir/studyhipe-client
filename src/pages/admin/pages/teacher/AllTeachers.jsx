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
import {
  deleteTeacher,
  getAllTeacher,
} from "../../../../features/teacher/teacherApiSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/teacher/teacherSlice";
import Swal from "sweetalert2";

const AllTeachers = () => {
  const [singleModal, setSingleModal] = useState(false);

  const [singleData, setSingleData] = useState();

  const dispatch = useDispatch();

  const { teachers, message, error } = useSelector((state) => state.teacher);

  //get single Teacher
  const handleSingleTeacher = (id) => {
    setSingleModal(true);
    const data = teachers.find((item) => item._id === id);
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
        dispatch(deleteTeacher(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    dispatch(getAllTeacher());
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
                <h2>Single Teacher</h2>
                <CloseButton onClick={() => setSingleModal(false)} />
              </ModalHeader>
              <ModalBody className="w-100">
                <div className="img-box text-center">
                  <img
                    style={{ width: "50%", borderRadius: "50%" }}
                    src={singleData?.photo}
                    alt=""
                  />
                </div>
                <div className="content-box pt-3">
                  <ul className="p-2">
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Name : </strong> {singleData?.name}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Phone : </strong> {singleData?.phone}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Email: </strong> {singleData?.email}
                      </p>
                    </li>
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> University: </strong> Dhaka University
                      </p>
                    </li>
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Subject: </strong> {singleData?.subject}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Location: </strong> Mirpur
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Phone: </strong> 01959609081
                      </p>
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
          <div className="col-md-12 col-lg-10">
            <Link
              to="/admin/createteacher"
              className="btn btn-sm btn btn-info my-3"
            >
              {" "}
              Create Teacher{" "}
            </Link>
            <Card>
              <CardHeader>
                <h1>All Teachers</h1>
              </CardHeader>
              <CardBody>
                <table className="table table-striped border">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Photo</th>
                      <th>Name</th>
                      <th>Phone</th>
                      <th>Email</th>
                      <th>Subject</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {teachers?.length > 0
                      ? teachers?.map((item, index) => {
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
                              <td> {item?.name} </td>
                              <td> {item?.phone} </td>
                              <td> {item?.email} </td>
                              <td> {item?.subject} </td>
                              <td>
                                <button
                                  className="btn btn-sm btn btn-primary"
                                  onClick={() => handleSingleTeacher(item?._id)}
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
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTeachers;
