import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
AOS.init();
import "aos/dist/aos.css";

import "./App.scss";
import router from "./router/router";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoggedinStudent } from "./features/auth/authApiSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("loginStudent")) {
      dispatch(getLoggedinStudent());
    }
  }, [dispatch]);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </>
  );
}

export default App;
