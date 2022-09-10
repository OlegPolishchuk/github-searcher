import React from 'react';
import {UserDescription} from "components/userDescription/UserDescription";
import {Repos} from "components/repos/Repos";
import {useAppSelector} from "hooks";
import {NotFound} from "components/notFound/NotFound";

export const Main = () => {
  console.log('main rendered')
  const { userRepos } = useAppSelector(state => state.user);
  const { title } = useAppSelector(state => state.user);
  const { user }  = useAppSelector(state => state.user);

  if (userRepos.length === 0) {
    return (
      <main className='main'>
        <NotFound iconType='search' title={title}/>
      </main>
    )
  }

  return (
    <main className='main'>
      <UserDescription  user={user}/>
      <Repos />
    </main>
  )
};
