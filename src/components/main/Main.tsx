import React from 'react';
import {UserDescription} from "components/userDescription/UserDescription";
import {Repos} from "components/repos/Repos";
import {useAppSelector} from "hooks";
import {NotFound} from "components/notFound/NotFound";

import searchIcon from 'assets/icon/search_icon_large.png';
import userIcon from 'assets/icon/user-icon.png';

export const Main = () => {
  const { userRepos } = useAppSelector(state => state.user);
  const { user } = useAppSelector(state => state.user)
  const { title } = useAppSelector(state => state.user)

  console.log(`user =>`, user)
  console.log(`userRepo =>`, userRepos)

  if (userRepos.length === 0) {

    console.log('sadfsdef')
    return (
      <main className='main container'>
        <NotFound iconType='search' title={title}/>
      </main>
    )
  }

  return (
    <main className='main'>
      <UserDescription />
      <Repos />
    </main>
  )
};
