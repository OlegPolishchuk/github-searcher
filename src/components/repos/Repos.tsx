import React from 'react';
import {useAppDispatch, useAppSelector} from "hooks";
import {Repo} from "components/repo/Repo";
import {NotFound} from "components/notFound/NotFound";
import {Paginator} from "components/paginator/Paginator";
import {fetchRepos} from "store/reducers/actionCreators";
import {PER_PAGE} from "app-constants";

export const Repos = () => {
  const dispatch = useAppDispatch();

  const { user } = useAppSelector(state => state.user)
  const {userRepos} = useAppSelector(state => state.user)
  const { totalPAgeCount } = useAppSelector(state => state.user.searchParams)
  const { startPage } = useAppSelector(state => state.user.searchParams)

  const handlePageClick = (page: number) => {
    dispatch(fetchRepos({username: user.login, page}))
  }
  console.log('totalPageCount', totalPAgeCount)
  const pages = Math.ceil(totalPAgeCount / PER_PAGE);
  const content = userRepos.length
    ? <>
      <h1>Repositories ({user.public_repos})</h1>
      {userRepos.map(repo => <Repo repo={repo} key={repo.id}/>)}
    </>
    : <NotFound title='Repository list is empty' iconType='repoList' />

  return (
    <section className='repos'>
      {content}
      <Paginator pageCount={pages} callback={handlePageClick}/>
    </section>
  );
};
