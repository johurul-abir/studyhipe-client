
import { Link } from "react-router-dom";
import "./HscCommerce.scss";
import { FaCalculator } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { RiLiveFill } from "react-icons/ri";
import { TbNetwork } from "react-icons/tb";
import { RiEnglishInput } from "react-icons/ri";



const HscCommerce = () => {
  return (
    <>
     <div className="hsc-science">
      <div className="container">

        <div className="subject-wise-video">
          <h2 className="subject-wise-video-title">Subject wise videos </h2>
          <div className="video-link-area">

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <FaCalculator/> </i>
                      <Link><h6> Accounting </h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <FaUserTie/> </i>
                      <Link><h6> Management</h6></Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <FaSackDollar/> </i>
                      <Link><h6>Economics</h6></Link>
                    </div>
                  </div>
                </div>
              </div>


              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <TbNetwork/> </i>
                      <Link><h6>ICT</h6></Link>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="video-link-item">
                <div className="card video-card" style={{border: "1px solid #09A3DF"}}>
                  <div className="card-body" style={{padding: "10px"}}>
                    <div className="item-content">
                      <i> <RiEnglishInput/> </i>
                      <Link><h6>English</h6></Link>
                    </div>
                  </div>
                </div>
              </div>
     
          </div>
        </div>

        <div className="online-batch">
          <h2>Online Batch</h2>
          <p>Every where every place learn with top Teacher complete your sylebus</p>
            
           <div className="online-all-batches">

           <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Physics, Chemistry, H.Math & Biology)</h3>
                      <h6> <span> <FaBook/> </span> 8 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 12 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://www.smartpassiveincome.com/wp-content/uploads/2020/04/How-to-Create-an-Online-Course.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Physics, Chemistry)</h3>
                      <h6> <span> <FaBook/> </span> 4 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 6 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://storage.googleapis.com/bukas-website-v3-prd/website_v3/images/Bukas.ph_Choosing_Course_and_College.original.png" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="batch-item">
              <div className="card">
                <div className="card-body batch-content">
                  <div className="batch-left">
                    <div className="left-content">
                      <h3>HSC-2025 (Einglish, ICT)</h3>
                      <h6> <span> <FaBook/> </span> 2 Subjects</h6>
                      <p><i> <RiLiveFill/> </i> 6 live classes per week </p>
                      <button className='btn btn-info'>Show more</button>
                    </div>
                  </div>
                  <div className="batch-right">
                    <img src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" />
                  </div>
                </div>
              </div>
            </div>

           </div>
        </div>

        <div className="live-courses">
          <h2>Live Courses</h2>
          <div className="all-courses">

            <div className="course-item">
                <Link to="#">
                <div className="card live-course-card ">
                  <div className="card-body live-course-card-body">
                    <img src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" className='img-fluid' />
                    <h4>HSC-24 Live Full Revition </h4>
                    <h5>Free</h5>
                  </div>
                </div> 
                </Link>
            </div>

            <div className="course-item">
                <Link to="#">
                <div className="card live-course-card ">
                  <div className="card-body live-course-card-body">
                    <img src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" className='img-fluid' />
                    <h4>HSC-24 Live Short MCQ Full Revition</h4>
                    <h5>1800Tk</h5>
                  </div>
                </div> 
                </Link>
            </div>

            <div className="course-item">
                <Link to="#">
                <div className="card live-course-card ">
                  <div className="card-body live-course-card-body">
                    <img src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" className='img-fluid' />
                    <h4>HSC-25 Live Crush Course-1st paper</h4>
                    <h5>2500Tk</h5>
                  </div>
                </div> 
                </Link>
            </div>

            <div className="course-item">
                <Link to="#">
                <div className="card live-course-card ">
                  <div className="card-body live-course-card-body">
                    <img src="https://blog.coursify.me/wp-content/uploads/2018/08/plan-your-online-course.jpg" alt="" className='img-fluid' />
                    <h4>HSC-25 Live Crush Course-1st paper</h4>
                    <h5>2500Tk</h5>
                  </div>
                </div> 
                </Link>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  </>
  )
}

export default HscCommerce