import { useEffect, useState } from "react";
import {
  Accordion,
  Card,
  CardBody,
  CardHeader,
  CloseButton,
  Modal,
  ModalBody,
  ModalHeader,
} from "react-bootstrap";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import useForm from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowRight, MdOutlinePhone } from "react-icons/md";
import "./PersonalSecurity.scss";
import { CiMail } from "react-icons/ci";
import { updateName } from "../../../features/auth/authApiSlice";
import { toast } from "react-toastify";
import { setMessageEmpty } from "../../../features/auth/authSlice";

const PersonalSecqurity = () => {
  const dispatch = useDispatch();
  const [seepass, setSeepass] = useState(false);
  const [seepassModal, setSeepassModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);
  const [nameModal, setNameModal] = useState(false);

  const { message, error, auths } = useSelector((state) => state.auth);

  const { input, handleInputChange } = useForm({
    name: auths.name,
  });

  const handleNameSubmit = (e) => {
    e.preventDefault();
    dispatch(updateName(input));
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      setNameModal(false);
    }
    if (error) {
      toast.error(error);
      dispatch(setMessageEmpty());
    }
  }, [dispatch, message, error]);

  return (
    <>
      {/* password modal */}
      <Modal show={seepassModal}>
        <ModalHeader>
          <CloseButton
            style={{ fontSize: "12px" }}
            onClick={() => setSeepassModal(false)}
          />
        </ModalHeader>
        <ModalBody>
          <form>
            <div className="item my-3">
              <label>See Password </label>
              <div className="input_group">
                <input
                  type={seepass ? "text" : "password"}
                  className="form-control"
                  name="oldpassword"
                  value={input.oldpassword}
                  onChange={handleInputChange}
                />
                <i onClick={() => setSeepass((prevstate) => !prevstate)}>
                  {seepass ? (
                    <IoMdEye />
                  ) : input.oldpassword ? (
                    <IoIosEyeOff />
                  ) : (
                    <IoMdEye />
                  )}
                </i>
              </div>
            </div>
          </form>
        </ModalBody>
      </Modal>

      {/* Contact info Modal */}
      <Modal show={contactModal}>
        <ModalHeader>
          <CloseButton
            style={{ fontSize: "12px" }}
            onClick={() => setContactModal(false)}
          />
        </ModalHeader>
        <ModalBody>
          <h3>Contact information</h3>
          <p style={{ fontSize: "12px" }}>
            Manage your mobile numbers and emails to make sure your contact info
            is accurate and up to date.
          </p>
          <ul className="border m-0 p-0">
            <li className="contact-box border-bottom">
              <div className="contact-item">
                <div className="contact-info">
                  <p>
                    {" "}
                    <CiMail /> mdjohurulislam@gmail.com
                  </p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </li>
            <li className="contact-box border-bottom">
              <div className="contact-item">
                <div className="contact-info">
                  <p>
                    {" "}
                    <MdOutlinePhone /> 01959609081
                  </p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </li>
            <li className="contact-box">
              <div className="contact-item">
                <div className="contact-info">
                  <p className="text-primary">Add new contact</p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </li>
          </ul>
        </ModalBody>
      </Modal>

      {/* Name Modal */}
      <Modal show={nameModal}>
        <ModalHeader>
          <CloseButton
            style={{ fontSize: "12px" }}
            onClick={() => setNameModal(false)}
          />
        </ModalHeader>
        <ModalBody>
          <h3>Contact information</h3>
          <p>
            Manage your mobile numbers and emails to make sure your contact info
            is accurate and up to date.
          </p>
          <ul className="border m-0 p-0">
            <li className="contact-box border-bottom">
              <div className="contact-item">
                <div className="contact-info">
                  <p> {auths.name} </p>
                </div>
                <MdKeyboardArrowRight />
              </div>
            </li>

            <li className="contact-box p-0">
              <div className="contact-item w-100">
                <Accordion className="w-100">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <p className="text-primary">Change Name</p>
                    </Accordion.Header>
                    <Accordion.Body>
                      <form onSubmit={handleNameSubmit}>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          value={input.name}
                          onChange={handleInputChange}
                        />
                        <button className="btn btn-success mt-2" type="submit">
                          Change now
                        </button>
                      </form>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </li>
          </ul>
        </ModalBody>
      </Modal>

      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <Card>
              <CardHeader>
                <h3>Add contact and see password</h3>
              </CardHeader>
              <CardBody>
                <ul className="border p-0">
                  <li
                    className="border-bottom p-2 into-item"
                    onClick={() => setSeepassModal(true)}
                  >
                    <div className="seepass">
                      <p className="m-0">See your password</p>
                      <MdKeyboardArrowRight />
                    </div>
                  </li>
                  <li
                    className="border-bottom p-2 into-item"
                    onClick={() => setContactModal(true)}
                  >
                    <div className="w-100 contact-info">
                      <div className="content">
                        <h6 className="m-0">Contact info</h6>
                        <p className="m-0">
                          {auths.email ? auths.email : auths.phone}
                        </p>
                      </div>
                      <MdKeyboardArrowRight />
                    </div>
                  </li>
                  <li
                    className="border-bottom p-2 into-item"
                    onClick={() => setNameModal(true)}
                  >
                    <div className="w-100 contact-info">
                      <div className="content">
                        <h6 className="m-0">Name</h6>
                        <p className="m-0"> {auths.name} </p>
                      </div>
                      <MdKeyboardArrowRight />
                    </div>
                  </li>
                </ul>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalSecqurity;
