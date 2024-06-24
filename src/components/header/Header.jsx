import { Link, useLocation } from "react-router-dom";
import "./Header.scss";
import { useState } from "react";

const Header = () => {
  const location = useLocation();

  const [nav, setNav] = useState(false);

  const handelToglebtn = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="shadow">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <div className="logo navbar-brand ">
                  <Link to="/">
                    <img
                      src="https://studyhipe.com/wp-content/uploads/2023/10/cropped-logo-1-300x70.png"
                      alt="logo"
                    />
                  </Link>
                </div>

                <button
                  className="navbar-toggler"
                  type="button"
                  onClick={handelToglebtn}
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className={`collapse navbar-collapse ${nav && "show"}`}
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item " onClick={() => setNav(false)}>
                      <Link
                        to="/"
                        className={location.pathname === "/" ? "active" : ""}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/hsc"
                        className={location.pathname === "/hsc" ? "active" : ""}
                      >
                        HSC
                      </Link>
                    </li>

                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/course"
                        className={
                          location.pathname === "/course" ? "active" : ""
                        }
                      >
                        Course
                      </Link>
                    </li>
                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/teacher"
                        className={
                          location.pathname === "/teacher" ? "active" : ""
                        }
                      >
                        Teachers
                      </Link>
                    </li>
                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/contact"
                        className={
                          location.pathname === "/contact" ? "active" : ""
                        }
                      >
                        Contact
                      </Link>
                    </li>

                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/blog"
                        className={
                          location.pathname === "/blog" ? "active" : ""
                        }
                      >
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item" onClick={() => setNav(false)}>
                      <Link
                        to="/campus"
                        className={
                          location.pathname === "/campus" ? "active" : ""
                        }
                      >
                        Visit Campus
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
