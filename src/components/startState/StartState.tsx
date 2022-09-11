import React from 'react';
import {NotFound} from "components/notFound/NotFound";
import {useAppSelector} from "hooks";

export const StartState = () => {
  const { userRepos } = useAppSelector(state => state.user);
  const { title } = useAppSelector(state => state.user);

  return (
    <main className='main'>
      <NotFound iconType='search' title={title}/>
    </main>
  );
};
