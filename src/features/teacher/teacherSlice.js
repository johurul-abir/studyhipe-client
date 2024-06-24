import { createSlice } from "@reduxjs/toolkit";
import { createTeacher, deleteTeacher, getAllTeacher } from "./teacherApiSlice";
import { toast } from "react-toastify";

//create student slice
const teacherSlice = createSlice({
  name: "teacher",
  initialState: {
    teachers: [],
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.error = null), (state.message = null);
    },
  },
  extraReducers: (builder) => {
    builder
      //create teacher
      .addCase(createTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = [...state.teachers, action.payload.teachers];
        state.message = action.payload.message;
        toast.success(action.payload.message);
      })
      //get all teachers
      .addCase(getAllTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getAllTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload.teachers;
      })
      //Delete Teacher
      .addCase(deleteTeacher.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      });
  },
});

//actions
export const { setMessageEmpty } = teacherSlice.actions;
//reducer
export default teacherSlice.reducer;
