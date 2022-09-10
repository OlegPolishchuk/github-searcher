import React from 'react';

export const UserDescription = () => {
  return (
    <aside className='user'>
      <img className='user_photo' src='' alt='user_photo' />
      <h2 className='user_name'>Dan Abramov</h2>
      <div className='user_account_description'>
        <span>folowers</span>
        <span>folowing</span>
      </div>
    </aside>
  );
};
