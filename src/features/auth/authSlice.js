import { createSlice } from "@reduxjs/toolkit";
import {
  accountActivitonByOtp,
  changeAuthPass,
  changeProfileImg,
  getLoggedinStudent,
  logoutStudent,
  loingStudent,
  regStudent,
  updateAuthInfo,
  updateName,
} from "./authApiSlice";

//create student slice
const authSlice = createSlice({
  name: "auth",
  initialState: {
    auths: localStorage.getItem("loginStudent")
      ? JSON.parse(localStorage.getItem("loginStudent"))
      : null,
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
      .addCase(regStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(regStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload;
        state.message = action.payload.message;
      })
      .addCase(regStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //login student
      .addCase(loingStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(loingStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        state.message = action.payload.message;
        localStorage.setItem(
          "loginStudent",
          JSON.stringify(action.payload.auth)
        );
      })
      .addCase(loingStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //Logout student
      .addCase(logoutStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
        localStorage.removeItem("loginStudent");
        state.auths = null;
      })
      .addCase(logoutStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //getLoggedinStudent
      .addCase(getLoggedinStudent.pending, (state) => {
        state.loading = true;
      })
      .addCase(getLoggedinStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        localStorage.setItem(
          "loginStudent",
          JSON.stringify(action.payload.auth)
        );
      })
      .addCase(getLoggedinStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.auths = null;
        localStorage.removeItem("loginStudent");
      }) //Change password
      .addCase(changeAuthPass.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeAuthPass.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload;
        state.message = action.payload.message;
      })
      .addCase(changeAuthPass.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      //change profiel image
      .addCase(changeProfileImg.pending, (state) => {
        state.loading = true;
      })
      .addCase(changeProfileImg.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        state.message = action.payload.message;
      })
      .addCase(changeProfileImg.rejected, (state) => {
        state.loading = false;
      })
      //Update Profile info
      .addCase(updateAuthInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAuthInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        state.message = action.payload.message;
      })
      .addCase(updateAuthInfo.rejected, (state) => {
        state.loading = false;
      })
      //Upadate Name
      .addCase(updateName.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateName.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        state.message = action.payload.message;
      })
      .addCase(updateName.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //activationByOtp
      .addCase(accountActivitonByOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(accountActivitonByOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.auths = action.payload.auth;
        state.message = action.payload.message;
      })
      .addCase(accountActivitonByOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

//export setMessageEmpty
export const { setMessageEmpty } = authSlice.actions;

//actions

//reducer
export default authSlice.reducer;
