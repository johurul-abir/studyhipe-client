import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api.js";

//get all Teachers
export const getAllTeacher = createAsyncThunk(
  "teacher/getAllTeacher",
  async () => {
    try {
      const response = await API.get("/api/v1/teacher");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//Delete Teacher
export const deleteTeacher = createAsyncThunk(
  "teacher/deleteTeacher",
  async (id) => {
    try {
      const response = await API.delete(`/api/v1/teacher/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//create student
export const createTeacher = createAsyncThunk(
  "teacher/createTeacher",
  async (data) => {
    try {
      const response = await API.post("/api/v1/teacher", data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
