import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {StartState} from "components/startState/StartState";
import {Main} from "components/main/Main";
import {useAppSelector} from "hooks";

export const Pages = () => {
  const { user } = useAppSelector(state => state.user)
  const { userRepos } = useAppSelector(state => state.user)

  let page;

  if (user.id) {
    if (userRepos) {
      page = <Main />
    }
  } else {
    page = <StartState />
  }


  return (
    <Routes>
      <Route path='*' element={page} />
    </Routes>
  );
};
