import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks";
import {fetchRepos} from "store/reducers/actionCreators";
import {Header} from "components/header/Header";
import {Main} from "components/main/Main";

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
