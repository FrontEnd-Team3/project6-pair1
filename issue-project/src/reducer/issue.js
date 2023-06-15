import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Octokit } from "@octokit/core";

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
  reducers: {
    // addTodo(state, action) {
    //   state.todos.unshift(action.payload);
    // },
  },
  extraReducers: (builder) => {
    // 로딩 상태일 때
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

// export const { addTodo } = todoSlice.actions;

const octokit = new Octokit({
    auth: process.env.GET_ISSUE_TOKEN_JW,
  });
  
export const getIssues = createAsyncThunk(,
    // URL
    async () => {
        try {
          await octokit.request("GET /repos/{owner}/{repo}/issues/{issue_number}", {
            owner: "angluar",
            repo: "angular-cli",
            issue_number: "ISSUE_NUMBER",
            per_page: 2,
            sort: "updated",
            direction: "asc",
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          });
        } catch (err) {
          console.error(err);
        }
    })