import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api.js";

//get all student
export const getAllCourses = createAsyncThunk(
  "course/getAllCourses",
  async () => {
    try {
      const response = await API.get("/api/v1/course");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//Delete Course
export const deleteCourse = createAsyncThunk(
  "course/deleteCourse",
  async (id) => {
    try {
      const response = await API.delete(`/api/v1/course/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//get all student
export const createCourses = createAsyncThunk(
  "course/createCourses",
  async (data) => {
    try {
      const response = await API.post("/api/v1/course", data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
