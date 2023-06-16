import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../apis/auth.api";

const initialState = {
  issues: [],
  getIssueState: {
    loading: false,
    done: false,
    err: null,
  },
};

export const issueSlice = createSlice({
  name: "issue",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getIssues.pending, (state) => {
      state.getIssueState.loading = true;
      state.getIssueState.done = false;
      state.getIssueState.err = null;
    });
    builder.addCase(getIssues.fulfilled, (state, action) => {
      state.getIssueState.loading = false;
      state.getIssueState.done = true;
      state.getIssueState.err = null;
    });
    builder.addCase(getIssues.rejected, (state, action) => {
      state.getIssueState.loading = false;
      state.getIssueState.done = false;
      state.getIssueState.err = action.payload;
    });
    // });
  },
});

export const getIssues = createAsyncThunk(
  // URL
  async ({ owner, repo }) => {
    try {
      console.log("data", owner, repo);
      const res = await AuthApi.getData(owner, repo);
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }
);
