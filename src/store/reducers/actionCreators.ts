import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserReposAPI} from "api/data";
import {AxiosError} from "axios";

export const fetchData = createAsyncThunk(
  'user/fetchData',
  async (username: string, thunkApi) => {
    try {
      return await UserReposAPI.fetchData(username);
    } catch (e) {
      const error = e as AxiosError;

      return thunkApi.rejectWithValue(error.message)
    }
  }
)

export const fetchRepos = createAsyncThunk(
  'user/fetchRepos',
  async (params: {username: string, page: number}) => {
    try {
      return await UserReposAPI.fetchRepos(params.username, params.page)
    } catch (e) {
      console.warn(e)
    }
  }
)