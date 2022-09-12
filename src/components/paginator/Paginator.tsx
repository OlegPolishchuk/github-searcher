import React from 'react';
import ReactPaginate from "react-paginate";
import {useAppDispatch} from "hooks";

type PropsType = {
  pageCount: number;
  callback: (page: number) => void;
}

export const Paginator = ({ pageCount, callback }: PropsType) => {
  const dispatch = useAppDispatch();

  const handlePageClick = (event: {selected: number}) => {
      callback(event.selected + 1)
  }
  console.log(pageCount)

  return (
    <>
      <ReactPaginate
        className='paginator'
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageLinkClassName='paginator_link'
        breakLabel='...'
        breakLinkClassName='paginator_link'
        nextLabel='>'
        nextLinkClassName='paginator_link'
        previousLabel='<'
        previousLinkClassName='paginator_link'
        activeLinkClassName='paginator_link active'
        renderOnZeroPageCount={() => null}
        onPageChange={(e)=>handlePageClick(e)}
      />
    </>
  )
}