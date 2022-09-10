import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  error: '',
  isLoading: false,
  repos: [],
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export const userReducer = userSlice.reducer;