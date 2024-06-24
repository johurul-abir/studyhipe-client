//import Layouts from "../components/layouts/Layouts"
import { useSelector } from "react-redux";
import Admin from "../pages/admin/Admin";
import AllCourse from "../pages/admin/pages/Course/AllCourse";
import CreateCorse from "../pages/admin/pages/Course/CreateCorse";
import CreateTeam from "../pages/admin/pages/CreateTeam";
import Dashboard from "../pages/admin/pages/Dashboard";
import AllStudent from "../pages/admin/pages/student/AllStudent";
import CreateNewStudent from "../pages/admin/pages/student/CreateStudent";
import StudentProfile from "../pages/student profile/StudentProfile";
import Attendance from "../pages/student profile/attentdance/Attendance";
import HomeWork from "../pages/student profile/homework/HomeWork";
import Myprofile from "../pages/student profile/my porfile/Myprofile";
import Notice from "../pages/student profile/notice/Notice";
import OnlineCourses from "../pages/student profile/online courses/OnlineCourses";
import OnlineExam from "../pages/student profile/online exam/OnlineExam";
import { Navigate, Outlet } from "react-router-dom";
import LiveClass from "../pages/student profile/liveclass/LiveClass";
import LessonPlan from "../pages/student profile/lesson plan/LessonPlan";
import Slybus from "../pages/student profile/slybus/Slybus";
import LeaveOf from "../pages/student profile/leave of/LeaveOf";
import Download from "../pages/student profile/download/Download";
import StudentDashboard from "../pages/student profile/dashborad/StudentDashboard";
import CreateTeacher from "../pages/admin/pages/teacher/CreateTeacher";
import AllTeachers from "../pages/admin/pages/teacher/AllTeachers";
import ProfileSetting from "../pages/student profile/profile-setting/ProfileSetting";
import ChangePassword from "../pages/student profile/ChangePassword";
import CreateNotice from "../pages/admin/pages/notice/CreateNotice";
import AllNotice from "../pages/admin/pages/notice/AllNotice";
import SingleNotice from "../pages/student profile/notice/SingleNotice";
import PersonalSecqurity from "../pages/student profile/personal secqurity/PersonalSecqurity";

//create login student route gard
const AuthStudentRouteGrad = () => {
  const { auths } = useSelector((state) => state.auth);

  if (auths) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

const PrivateRouter = [
  {
    // element: <Layouts/>,
    // children: [
    //     {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "addcourse",
        element: <CreateCorse />,
      },
      {
        path: "course",
        element: <AllCourse />,
      },
      {
        path: "team",
        element: <CreateTeam />,
      },
      {
        path: "allstudent",
        element: <AllStudent />,
      },
      {
        path: "createstudent",
        element: <CreateNewStudent />,
      },
      {
        path: "createteacher",
        element: <CreateTeacher />,
      },
      {
        path: "allteachers",
        element: <AllTeachers />,
      },
      {
        path: "createnotice",
        element: <CreateNotice />,
      },
      {
        path: "allnotice",
        element: <AllNotice />,
      },
    ],
  },

  {
    element: <AuthStudentRouteGrad />,
    children: [
      {
        path: "/studentprofile",
        element: <StudentProfile />,
        children: [
          {
            path: "/studentprofile",
            element: <StudentDashboard />,
          },
          {
            path: "myprofile",
            element: <Myprofile />,
          },
          {
            path: "onlinecourses",
            element: <OnlineCourses />,
          },
          {
            path: "liveclass",
            element: <LiveClass />,
          },
          {
            path: "leassonplan",
            element: <LessonPlan />,
          },
          {
            path: "slybus",
            element: <Slybus />,
          },
          {
            path: "homework",
            element: <HomeWork />,
          },
          {
            path: "onlineexam",
            element: <OnlineExam />,
          },
          {
            path: "leaveof",
            element: <LeaveOf />,
          },
          {
            path: "download",
            element: <Download />,
          },
          {
            path: "notice",
            element: <Notice />,
          },
          {
            path: "notice/:id",
            element: <SingleNotice />,
          },
          {
            path: "profile-setting",
            element: <ProfileSetting />,
          },
          {
            path: "attentdance",
            element: <Attendance />,
          },
          {
            path: "personal-security",
            element: <PersonalSecqurity />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
    ],
  },
];

export default PrivateRouter;
