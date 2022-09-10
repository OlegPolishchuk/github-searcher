import React from 'react';

type PropsType = {
  title: string;
  iconType: 'search' | 'user';
}

export const NotFound = ({title, iconType}: PropsType) => {

  const searchIcon = <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M29.4937 0.916748C13.7366 0.916748 0.916748 13.7366 0.916748 29.4937C0.916748 45.2508 13.7366 58.0707 29.4937 58.0707C35.9227 58.0707 41.8453 55.9147 46.6182 52.3235L58.2002 63.9021C58.9863 64.6881 60.0194 65.0834 61.0511 65.0834C62.0828 65.0834 63.1159 64.6881 63.902 63.902C65.4784 62.3256 65.4783 59.7766 63.902 58.2002L52.3235 46.6182C55.9147 41.8453 58.0707 35.9227 58.0707 29.4937C58.0707 13.7366 45.2508 0.916748 29.4937 0.916748ZM8.98141 29.4937C8.98141 18.1816 18.1816 8.98141 29.4937 8.98141C40.8058 8.98141 50.006 18.1816 50.006 29.4937C50.006 40.8058 40.8058 50.006 29.4937 50.006C18.1816 50.006 8.98141 40.8058 8.98141 29.4937Z" fill="#808080"/>
  </svg>

  const userIcon = (
    <>

      <svg width="65" height="75" viewBox="0 0 65 75" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M23 18.5C23 13.2533 27.2533 9 32.5 9C37.7467 9 42 13.2533 42 18.5C42 23.7467 37.7467 28 32.5 28C27.2533 28 23 23.7467 23 18.5ZM32.5 0C22.2827 0 14 8.28273 14 18.5C14 28.7173 22.2827 37 32.5 37C42.7173 37 51 28.7173 51 18.5C51 8.28273 42.7173 0 32.5 0ZM9 70.5C9 57.5213 19.5213 47 32.5 47C45.4787 47 56 57.5213 56 70.5C56 72.9853 58.0147 75 60.5 75C62.9853 75 65 72.9853 65 70.5C65 52.5507 50.4493 38 32.5 38C14.5507 38 0 52.5507 0 70.5C0 72.9853 2.01472 75 4.5 75C6.98528 75 9 72.9853 9 70.5Z" fill="#808080"/>
      </svg>

    </>
  )

  return (
    <div className='not_found'>
      {iconType === 'search' ? searchIcon : userIcon}
      <h2 className='not_found_title'>{title}</h2>
    </div>
  );
};
