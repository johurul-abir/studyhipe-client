import { createSlice } from "@reduxjs/toolkit";
import { createCourses, deleteCourse, getAllCourses } from "./courseApiSlice";

//create student slice
const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
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
    //register student
    builder
      //get all course
      .addCase(getAllCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message;
      })
      .addCase(getAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload.courses;
      })
      //create course
      .addCase(createCourses.pending, (state) => {
        state.loading = true;
      })
      .addCase(createCourses.rejected, (state, action) => {
        state.loading = false;
        state.message = action.error.message;
      })
      .addCase(createCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = [...state.courses, action.payload.courses];
        state.message = action.payload.message;
      })
      //Delete Course
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = courseSlice.actions;

//actions

//reducer
export default courseSlice.reducer;
