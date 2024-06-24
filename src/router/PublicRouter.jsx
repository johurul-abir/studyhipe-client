import Home from "../pages/home/home";
import Teacher from "../pages/teacher/Teacher";
import Contact from "../pages/contact/Contact";
import Course from "../pages/course/Course";
import Login from "../pages/login/Login";
import Blog from "../pages/blog/Blog";
import SingleBlog from "../pages/blog/SingleBlog";
import Layouts from "../components/layouts/Layouts";
import Hsc from "../pages/hsc/Hsc";
import HscScience from "../pages/hsc-science/HscScience";
import HscCommerce from "../pages/hsc-commerce/HscCommerce";
import HscArts from "../pages/hsc-arts/HscArts";
import Campus from "../pages/campus/Campus";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Notice from "../pages/student profile/notice/Notice";
import SingleNotice from "../pages/student profile/notice/SingleNotice";

//create login student route gard
const PublicStudentRouteGrad = () => {
  const { auths } = useSelector((state) => state.auth);

  if (auths) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
};

const PublicRouter = [
  {
    element: <Layouts />,
    children: [
      {
        element: <PublicStudentRouteGrad />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/teacher",
            element: <Teacher />,
          },
          {
            path: "/contact",
            element: <Contact />,
          },

          {
            path: "/course",
            element: <Course />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/blog",
            element: <Blog />,
          },
          {
            path: "/blog/:slug",
            element: <SingleBlog />,
          },
          {
            path: "/notice",
            element: <Notice />,
          },
          {
            path: "notice/:id",
            element: <SingleNotice />,
          },
          {
            path: "/hsc",
            element: <Hsc />,
            children: [
              {
                path: "science",
                element: <HscScience />,
              },
              {
                path: "commerce",
                element: <HscCommerce />,
              },
              {
                path: "arts",
                element: <HscArts />,
              },
            ],
          },
          {
            path: "/campus",
            element: <Campus />,
          },
        ],
      },
    ],
  },
];

export default PublicRouter;
