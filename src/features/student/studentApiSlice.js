import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//get all student
export const getAllStudetns = createAsyncThunk(
  "student/getAllStudetns",
  async () => {
    try {
      const response = await API.get("/api/v1/student");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//Delete Student
export const deleteStudent = createAsyncThunk(
  "student/deleteStudent",
  async (id) => {
    try {
      const response = await API.delete(`/api/v1/student/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

//create student
export const createStudent = createAsyncThunk(
  "student/createStudent",
  async (data) => {
    try {
      const response = await API.post("/api/v1/student", data);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);
