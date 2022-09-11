import React from 'react';
import {UserRepo} from "models/UserRepo";

type PropsType = {
  repo: UserRepo;
}

export const Repo = ({ repo }: PropsType) => {
  return (
    <section className={'repo'}>
      <h3 className='repo_title'><a href={repo.html_url}>{repo.name}</a></h3>
      <p className='repo_description'>{repo.description}</p>
    </section>
  );
};