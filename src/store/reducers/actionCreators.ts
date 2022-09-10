import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserReposAPI} from "api/data";
import {AxiosError} from "axios";

export const fetchData = createAsyncThunk(
  'user/fetchRepos',
  async (username: string, thunkApi) => {
    try {
      return await UserReposAPI.fetchData(username);
    } catch (e) {
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message)
    }
  }
)