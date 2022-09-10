import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserReposAPI} from "api/userRepos";
import {AxiosError} from "axios";

export const fetchRepos = createAsyncThunk(
  'user/fetchRepos',
  async (username: string, thunkApi) => {
    try {
      return await UserReposAPI.fetchRepos(username);
    } catch (e) {
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message)
    }
  }
)