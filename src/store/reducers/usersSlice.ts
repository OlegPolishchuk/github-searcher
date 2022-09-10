import {createSlice} from "@reduxjs/toolkit";
import {fetchRepos} from "store/reducers/actionCreators";
import {initialStateType} from "store/reducers/types";
import {User} from "models/User";

const initialState: initialStateType = {
  error: '',
  isLoading: false,
  userRepos: [],
  title: 'Start with searching a GitHub user',
  user: {} as User,
  // user: {
  //   name: '',
  //   avatar_url: '',
  //   company: '',
  //   created_at: '',
  //   email: '',
  //   id: 0,
  //   type: '',
  //   followers: 0,
  //   html_url: '',
  //   login: '',
  //   repos_url: '',
  // },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepos.fulfilled, (state, action)=> {
      state.userRepos = action.payload
    })
  }
})

export const userReducer = userSlice.reducer;