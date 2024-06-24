import {
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import { FaEye } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  deleteStudent,
  getAllStudetns,
} from "../../../../features/student/studentApiSlice";
import {
  selectStudent,
  setMessageEmpty,
} from "../../../../features/student/studentSlice";
import evatar from "../../../../../public/149071.png";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const AllStudent = () => {
  const dispatch = useDispatch();

  const [singleModal, setSingleModal] = useState(false);

  const [singleData, setSingleData] = useState();

  //all student selector
  const { students, message, error } = useSelector(selectStudent);

  //get single Teacher
  const handleSingleStudent = (id) => {
    setSingleModal(true);
    const data = students.find((item) => item._id === id);
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
        dispatch(deleteStudent(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //use effect for data load
  useEffect(() => {
    dispatch(getAllStudetns());
    if (message) {
      toast.success(message);
      dispatch(getAllStudetns());
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
                        <strong> Class : </strong> {singleData?.classname}
                      </p>
                    </li>
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Location: </strong> {singleData?.location}
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
              to={"/admin/createstudent"}
              type="button"
              className="btn btn-sm btn-info mb-1"
            >
              Add new student
            </Link>
            <Card>
              <CardHeader>
                <h1>All Student</h1>
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
                      <th>Class</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody className="align-middle">
                    {students?.length > 0
                      ? students?.map((item, index) => {
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
                                  alt=""
                                />
                              </td>
                              <td> {item?.name} </td>
                              <td> {item?.phone} </td>
                              <td> {item?.email} </td>
                              <td> {item?.classname} </td>
                              <td>
                                <button
                                  className="btn btn-sm btn btn-primary"
                                  onClick={() => handleSingleStudent(item._id)}
                                >
                                  <FaEye />
                                </button>
                                <button className="btn btn-sm btn btn-info mx-2">
                                  <CiEdit />
                                </button>
                                <button
                                  className="btn btn-sm btn btn-danger"
                                  onClick={() => handleDelete(item._id)}
                                >
                                  <FaTrashAlt />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      : "student Data not found"}
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

export default AllStudent;
