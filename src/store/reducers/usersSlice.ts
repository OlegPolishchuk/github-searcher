import {createSlice} from "@reduxjs/toolkit";
import {fetchData, fetchRepos} from "store/reducers/actionCreators";
import {initialStateType} from "store/reducers/types";
import {User} from "models/User";
import {PER_PAGE, START_PAGE} from "app-constants";

const initialState: initialStateType = {
  error: '',
  isLoading: false,
  userRepos: [],
  title: 'Start with searching a GitHub user',
  user: {} as User,
  searchParams: {
    startPage: START_PAGE,
    perPage: PER_PAGE,
    totalPAgeCount: 0,
  }
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
    builder.addCase(fetchData.fulfilled, (state, action)=> {
      state.user = action.payload[0];
      state.userRepos = action.payload[1];
      state.searchParams.totalPAgeCount = action.payload[0].public_repos;
    })

    builder.addCase(fetchRepos.fulfilled, (state, action) => {
      state.userRepos = action.payload
    })
  }
})

export const userReducer = userSlice.reducer;