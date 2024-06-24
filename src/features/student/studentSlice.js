import { createSlice } from "@reduxjs/toolkit";
import {
  createStudent,
  deleteStudent,
  getAllStudetns,
} from "./studentApiSlice";

//create student slice
const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    message: null,
    error: null,
    loading: false,
  },
  reducers: {
    setMessageEmpty: (state) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllStudetns.pending, (state) => {
        state.loading = true;
      })

      .addCase(getAllStudetns.fulfilled, (state, action) => {
        state.loading = false;
        state.students = action.payload.students;
      })

      .addCase(getAllStudetns.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //create student
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
      })

      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.students = [...state.students, action.payload.students];
        state.message = action.payload.message;
      })

      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //Delete Student
      .addCase(deleteStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      });
  },
});

//selectors
export const selectStudent = (state) => state.student;
//actions
export const { setMessageEmpty } = studentSlice.actions;

//reducer
export default studentSlice.reducer;
