import React from 'react';
import {UserDescription} from "components/userDescription/UserDescription";
import {Repos} from "components/repos/Repos";

export const Main = () => {
  return (
    <main className='main'>
      <UserDescription />
      <Repos />
    </main>
  )
};
