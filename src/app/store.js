import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import studentReducer from "../features/student/studentSlice";
import courseReducer from "../../src/features/course/courseSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import noticeReduce from "../features/notice/noticeSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    student: studentReducer,
    course: courseReducer,
    teacher: teacherReducer,
    notice: noticeReduce,
  },
  middleware: (getDefaultMiddlewares) => getDefaultMiddlewares(),
  devTools: true,
});

//export defalut
export default store;
