import "./Footer.scss";

import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-lg-4">
              <div className="footerInfo">
                <a href="">
                  {" "}
                  <img
                    src="https://studyhipe.com/wp-content/uploads/2023/10/cropped-logo-1-300x70.png"
                    alt=""
                  />
                </a>

                <br />
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Consequuntur culpa ad unde officia
                </p>
                <br />
                <ul>
                  <li>
                    {" "}
                    <a href="">
                      {" "}
                      <TiSocialFacebook />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="">
                      {" "}
                      <IoLogoInstagram />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="">
                      {" "}
                      <CiLinkedin />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="">
                      {" "}
                      <FaPinterest />{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-lg-2">
              <div className="link">
                <h3>Importent Links</h3>
                <ul>
                  <li>
                    {" "}
                    <FaChevronRight /> <Link to=""> Course </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <FaChevronRight /> <a href=""> Event </a>
                  </li>

                  <li>
                    {" "}
                    <FaChevronRight /> <a href=""> Model Test </a>
                  </li>

                  <li>
                    {" "}
                    <FaChevronRight />
                    <a href=""> SSC Program </a>
                  </li>

                  <li>
                    {" "}
                    <FaChevronRight /> <a href="">HSC Program </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-lg-2">
              <div className="others">
                <h3>Others</h3>
                <ul>
                  <li>
                    {" "}
                    <FaChevronRight /> <Link to=""> Blog </Link>{" "}
                  </li>

                  <li>
                    <FaChevronRight />
                    <Link to=""> Notes pdf </Link>{" "}
                  </li>

                  <li>
                    <FaChevronRight />
                    <Link to=""> Offers </Link>{" "}
                  </li>

                  <li>
                    <FaChevronRight />
                    <Link to=""> Free Dwonload </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-md-3 col-lg-4">
              <div className="footerContact">
                <h3>Contact us Shortly</h3>
                <h4>Whatsapp: 01959609081</h4>
                <h4>Phone: 01641 372717</h4>
                <h4>E-mail: mdjohurulislam555@gmail.com</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
