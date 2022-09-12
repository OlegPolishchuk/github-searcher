import React from 'react';
import ReactPaginate from "react-paginate";
import {useAppDispatch} from "hooks";

type PropsType = {
  pageCount: number;
}

export const Paginator = ({ pageCount }: PropsType) => {
  const dispatch = useAppDispatch();

  const handlePageClick = () => {

  }

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
        renderOnZeroPageCount={() => null}
        onPageChange={handlePageClick}
      />
    </>
  )
}