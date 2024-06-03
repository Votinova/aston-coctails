import React from 'react'
import '../../scss/Pagination.scss';

const Pagination = (props: {arrPages: number [], page: number, handlePageClick: (page: number) => void, handleNextPage: () => void, handlePrevPage: () => void}) => {
console.log(props.page)
  return (
    <div className='pagination'>
        <button
        type='button' onClick={props.handlePrevPage}>
            {'<'}
        </button>
        {props.arrPages.map((page: number) => {
            return <div key={page} className='numbers' onClick={() => props.handlePageClick(page)}>{page}</div>
        })}
        <button
        type='button' onClick={props.handleNextPage}>
            {'>'}
        </button>
    </div>
  )
}

export default React.memo(Pagination);
