
import './Contact.scss'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiMapPinFill } from "react-icons/ri";
import { AiTwotoneMail } from "react-icons/ai";

const Contact = () => {


  return (
    <>
    <div className="contact">
      <div className="contact-header">
        <h2>Contact us</h2>
      </div>
      <div className="container item-group">

        <div className="contact-item">
          <div className="card contact-border shadow">
            <div className="card-body p-5">
              <div className="contact-box-content">
                <i><IoPhonePortraitOutline/></i>
                <h6>call us</h6>
                <p>+88 01959609081</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-item">
          <div className="card contact-border shadow">
            <div className="card-body p-5">
              <div className="contact-box-content">
                <i><RiMapPinFill/></i>
                <h6>Location</h6>
                <p>Dhaka,Cantonment, Vashantek Rood</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-item">
          <div className="card contact-border shadow">
            <div className="card-body p-5">
              <div className="contact-box-content">
                <i> <AiTwotoneMail/> </i>
                <h6>E-mail</h6>
                <p>mdjohurulislam555@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>


      <div className="contact-footer">
        <div className="container">
          <div className="row">
            <hr />
            <div className="col-md-6">
              <div className="google">
             
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
      
    </div>


    </>
  )
}

export default Contact