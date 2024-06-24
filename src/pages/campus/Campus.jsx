import gate from "../../assets/campus/gate.jpg";
import building from "../../assets/campus/bulding.jpg";
import libary from "../../assets/campus/library.jpg";
import canteen from "../../assets/campus/canteen.jpg";
import classroom from "../../assets/campus/classroom.jpg";
import commonroom from "../../assets/campus/common room.jpg";
import "./campus.scss";
import { CloseButton, Modal } from "react-bootstrap";
import { useState } from "react";
import { MdRemoveRedEye } from "react-icons/md";

const Campus = () => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <div className="campus">
        <div className="bardcome">
          <h3>our campus</h3>
        </div>

        <div className="gallery">
          <div className="container">
            <div className="gallery-box">
              <div className="gallery-item" onClick={() => setModal(true)}>
                <img src={gate} alt="" />
                <i className="preview-icon">
                  <MdRemoveRedEye />
                </i>
              </div>

              <div className="gallery-item">
                <img src={building} alt="" />
              </div>

              <div className="gallery-item">
                <img src={libary} alt="" />
              </div>

              <div className="gallery-item">
                <img src={canteen} alt="" />
              </div>

              <div className="gallery-item">
                <img src={classroom} alt="" />
              </div>

              <div className="gallery-item">
                <img src={commonroom} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* image modal */}
      <Modal show={modal} size="xl" centered={true} className="img-modal">
        <CloseButton className="c-button" onClick={() => setModal(false)} />
        <img src={gate} alt="" style={{ width: "100%" }} />
      </Modal>
    </>
  );
};

//export default
export default Campus;
