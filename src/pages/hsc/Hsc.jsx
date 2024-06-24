
import { Link, Outlet, useLocation } from 'react-router-dom';
import './Hsc.scss';
import HscScience from '../hsc-science/HscScience';
//const books = "../../assets/images/books.png"

const Hsc = () => {
    const location = useLocation()
  return (
    <>
        <div className="hsc">
            <div className="hsc-header">
                <div className="container header-content">
                    <div className="header-menu-1">
                        <h2>HSC </h2>
                    </div>
                    <div className="header-menu-2">
                        <ul>
                            <li className={location.pathname ==="/hsc/science" || location.pathname ==="/hsc" ? "active" : ""}><Link to ="science" >Science</Link ></li>

                            <li className={location.pathname ==="/hsc/commerce" ? "active" : ""} ><Link to ="commerce" >Commerce</Link></li>

                            <li className={location.pathname ==="/hsc/arts" ? "active" : ""} ><Link to ="arts" >Arts</Link></li>
                        </ul>
                    </div>


                </div>
            </div>
            {
                location.pathname === "/hsc" ? <HscScience/> : <Outlet/>
            }

            
        </div>
    </>
  )
}

export default Hsc