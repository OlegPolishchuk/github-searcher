import React from 'react';
import {useAppSelector} from "hooks";
import {Repo} from "components/repo/Repo";
import {NotFound} from "components/notFound/NotFound";

export const Repos = () => {
  const {userRepos} = useAppSelector(state => state.user)

  const content = userRepos.length
    ? <>
      <h1>Repositories ({userRepos.length})</h1>
      {userRepos.map(repo => <Repo repo={repo} key={repo.id}/>)}
    </>
    : <NotFound title='Repository list is empty' iconType='repoList' />

  return (
    <section className='repos'>
      {content}
    </section>
  );
};
