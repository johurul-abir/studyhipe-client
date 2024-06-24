import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { MdDeleteSweep } from "react-icons/md";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useEffect, useState } from "react";

import { CloseButton, Modal, ModalBody, ModalHeader } from "react-bootstrap";
import Swal from "sweetalert2";

import "./CreateCourse.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCourse,
  getAllCourses,
} from "../../../../features/course/courseApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../../features/course/courseSlice";

function AllCourse() {
  //create useStarte
  const dispatch = useDispatch();

  const [singleModal, setSingleModal] = useState(false);

  const [singleData, setSingleData] = useState();

  const { courses, message, error } = useSelector((state) => state.course);

  //get single Teacher
  const handleSingleTeacher = (id) => {
    setSingleModal(true);
    const data = courses.find((item) => item._id === id);
    setSingleData(data);
  };

  //handleDelete
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteCourse(id));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
    dispatch(getAllCourses());
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch(setMessageEmpty());
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
    dispatch(getAllCourses());
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
                  <img src={singleData?.img} alt="" />
                </div>
                <div className="content-box pt-3">
                  <ul className="p-2">
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Course type : </strong> {singleData?.type}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Class : </strong> {singleData?.classof}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Course title: </strong> {singleData?.title}
                      </p>
                    </li>
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> No of Class : </strong> {singleData?.numberof}
                      </p>
                    </li>
                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Rguler Price: </strong>{" "}
                        {singleData?.regularprice}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Offer Price: </strong> {singleData?.offerprice}
                      </p>
                    </li>

                    <li style={{ border: "1px solid #ccc", padding: "5px" }}>
                      <p className="mb-0">
                        <strong> Free: </strong>{" "}
                        {singleData?.free ? "True" : "False"}
                      </p>
                    </li>
                  </ul>
                </div>
              </ModalBody>
            </Modal>
          </div>
        </div>
      </div>

      <div className="crud my-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="card" style={{ overflow: "hidden" }}>
                <div className="card-header">
                  <Link to="/admin/addcourse">
                    <button className="btn btn-warning">Add Course</button>
                  </Link>
                  <h2 className="text-center">Our Courses</h2>
                </div>
                <div className="card-body">
                  <table className="table table-striped border">
                    <thead className="text-center">
                      <th>#</th>
                      <th>Photo</th>
                      <th>title</th>
                      <th>type</th>
                      <th>class</th>
                      <th>classno</th>
                      <th>regularprice</th>
                      <th>offerprice</th>
                      <th>free</th>
                      <th>Action</th>
                    </thead>
                    <tbody>
                      {courses?.map((item, index) => {
                        return (
                          <tr className="align-middle text-center" key={index}>
                            <td>{index + 1}</td>
                            <td>
                              <img src={item?.img} className="user-photo" />
                            </td>
                            <td>{item?.title}</td>
                            <td>{item?.type}</td>
                            <td>{item?.classof}</td>
                            <td> {item?.numberof} </td>
                            <td> {item?.regularprice} </td>
                            <td> {item?.offerprice} </td>
                            <td> {item?.free} </td>
                            <td>
                              <button className="btn btn-sm btn btn-info m-1">
                                {" "}
                                <CiEdit />{" "}
                              </button>
                              <button
                                className="btn btn-sm btn btn-danger m-1"
                                onClick={() => handleDelete(item._id)}
                              >
                                {" "}
                                <MdDeleteSweep />{" "}
                              </button>
                              <button
                                className="btn btn-sm btn btn-primary m-1"
                                onClick={() => handleSingleTeacher(item._id)}
                              >
                                {" "}
                                <AiOutlineEyeInvisible />{" "}
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllCourse;
