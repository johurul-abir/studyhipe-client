import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/api";

//export student registation
export const regStudent = createAsyncThunk("auth/regStudent", async (data) => {
  try {
    const response = await API.post("/api/v1/register", data);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

//login student
export const loingStudent = createAsyncThunk(
  "auth/loingStudent",
  async (data) => {
    try {
      const response = await API.post("/api/v1/student/login", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//logout student
export const logoutStudent = createAsyncThunk(
  "auth/logoutStudent",
  async () => {
    try {
      const response = await API.post("/api/v1/student/logout");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//getloggedinStudent student
export const getLoggedinStudent = createAsyncThunk(
  "auth/getLoggedinStudent",
  async () => {
    try {
      const response = await API.get("/api/v1/me");
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//change password
export const changeAuthPass = createAsyncThunk(
  "auth/changeAuthPass",
  async (data) => {
    try {
      const response = await API.post("/api/v1/changepass", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//change Profile Photo
export const changeProfileImg = createAsyncThunk(
  "auth/changeProfileImg",
  async (data) => {
    try {
      const response = await API.post("/api/v1/student/profile-photo", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//update auth profile
export const updateAuthInfo = createAsyncThunk(
  "student/updateStudetnInfo",
  async (data) => {
    try {
      const response = await API.post("/api/v1/student/update-profile", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//update auth profile
export const updateName = createAsyncThunk(
  "student/updateName",
  async (data) => {
    try {
      const response = await API.post("/api/v1/student/update-name", data);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);

//Activation Account by OTP
export const accountActivitonByOtp = createAsyncThunk(
  "auth/accountActivitonByOtp",
  async ({ token, otp }) => {
    try {
      const response = await API.post(`/api/v1/activate/${token}`, otp);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
);
