import React from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {Header} from "components/header/Header";
import {Main} from "components/main/Main";
import {Pages} from "components/pages/Pages";
import {Loader} from "components/loader/Loader";
import {useAppSelector} from "hooks";

function App() {
  const { isLoading }  = useAppSelector(state => state.user)
  return (
    <>
      <Header/>
      <Pages/>
      { isLoading && <Loader />}
    </>
  );
}

export default App;

