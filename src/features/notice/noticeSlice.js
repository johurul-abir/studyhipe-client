import { createSlice } from "@reduxjs/toolkit";
import {
  createNotice,
  deleteNotice,
  getAllNotice,
  getSingleNotice,
} from "./noticeApiSlice";

//create student slice
const noticeSlice = createSlice({
  name: "notice",
  initialState: {
    notice: [],
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
      .addCase(createNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(createNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notice = [...state.notice, action.payload.notice];
        state.message = action.payload.message;
      })
      //get all notice
      .addCase(getAllNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getAllNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notice = action.payload.notices;
      })

      //get Single notice
      .addCase(getSingleNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(getSingleNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(getSingleNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.notice = state.notice.find(
          (data) => data._id === action.payload.notice.id
        );
      })

      // //Delete Teacher
      .addCase(deleteNotice.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNotice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteNotice.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
      });
  },
});

//actions
export const { setMessageEmpty } = noticeSlice.actions;
//reducer
export default noticeSlice.reducer;
