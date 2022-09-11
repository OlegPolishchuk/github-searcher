import React, {ChangeEvent, useState} from 'react';
import {useAppDispatch} from "hooks";
import {fetchData} from "store/reducers/actionCreators";

export const Search = () => {
  const dispatch = useAppDispatch();

  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value)
  }

  const handleFetch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setValue( value.trim() )
      if (value) {
        dispatch(fetchData(value));
      }
    }
  }

  return (
   <>
     <input
       className='header_search'
       type='text'
       placeholder='search'
       value={value}
       onChange={handleChange}
       onKeyPress={handleFetch}
     />
   </>
  );
};
