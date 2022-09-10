import React, {useEffect} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "hooks";
import {fetchRepos} from "store/reducers/actionCreators";
import {Header} from "components/header/Header";

function App() {
  const dispatch = useAppDispatch();

  const { userRepos } = useAppSelector(state => state.user);

  useEffect(() => {
    (async ()=>{
      try {
        dispatch(fetchRepos('OlegPolishchuk'))
      } catch (e) {

      }
    })()
  }, [])

  return (
    <>

      <BrowserRouter>
        <Header />
        <main>
          {userRepos.map(repo => <div>{repo.name}</div>)}
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
