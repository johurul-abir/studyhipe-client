import { Outlet, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Topbar from "../topbar/Topbar";
import Footer from "../footer/Footer";
import { Helmet } from "react-helmet";


const Layouts = () => {

  const location = useLocation()

  

  return (
    <>
        <Helmet>
        <meta charSet="utf-8"/>
        <title> StudyHipe {location.pathname ==="/" ? "| home" : location.pathname } </title>
        <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

    <Topbar/>
       
    <Header/> 
    

    <Outlet/>

    <Footer/>

    
    
    </>
  )
}

export default Layouts