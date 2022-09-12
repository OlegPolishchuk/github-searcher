import React from 'react';
import {useAppSelector} from "hooks";
import {Repo} from "components/repo/Repo";
import {NotFound} from "components/notFound/NotFound";
import {Paginator} from "components/paginator/Paginator";

export const Repos = () => {
  const { user } = useAppSelector(state => state.user)
  const {userRepos} = useAppSelector(state => state.user)
  const { totalPAgeCount } = useAppSelector(state => state.user.searchParams)
  const { startPage } = useAppSelector(state => state.user.searchParams)

  const content = userRepos.length
    ? <>
      <h1>Repositories ({user.public_repos})</h1>
      {userRepos.map(repo => <Repo repo={repo} key={repo.id}/>)}
    </>
    : <NotFound title='Repository list is empty' iconType='repoList' />

  return (
    <section className='repos'>
      {content}
      <Paginator pageCount={totalPAgeCount} />
    </section>
  );
};
