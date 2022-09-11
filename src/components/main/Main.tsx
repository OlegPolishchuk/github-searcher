import React from 'react';
import {UserDescription} from "components/userDescription/UserDescription";
import {Repos} from "components/repos/Repos";
import {useAppSelector} from "hooks";
import {NotFound} from "components/notFound/NotFound";

export const Main = () => {
  console.log('main rendered')

  const { user }  = useAppSelector(state => state.user);

  return (
    <main className='main'>
      <UserDescription  user={user}/>
      <Repos />
    </main>
  )
};
