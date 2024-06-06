import React from 'react'
import '../../scss/Pagination.scss';

export const Pagination = (props: {arrPages: number [], page: number, handlePageClick: (page: number) => void, handleNextPage: () => void, handlePrevPage: () => void, pages : number}) => {
  return (
    <div className='pagination'>
      {props.arrPages.length  >= props.pages? <>
        <button
        type='button' onClick={props.handlePrevPage}>
            {'<'}
        </button>
        {props.arrPages.map((page: number) => {
            return <div key={page} className={page === props.page? 'numer check': 'number'} onClick={() => props.handlePageClick(page)}>{page}</div>
        })}
        <button
        type='button' onClick={props.handleNextPage}>
            {'>'}
        </button>
        </> : ''}
    </div>
  )
}


