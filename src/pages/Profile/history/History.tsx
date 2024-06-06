import React, { useEffect } from 'react'
import { useAppSelector } from '../../../hooks/typescriptHooks/typescript'
import { inUser } from '../../../hooks/inUser'
import { useFetchHistoryQuery } from '../../../store/servise/Firebase';
import '../../../scss/History.scss'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSearch } from '../../../store/slices/searchSlise';
import ErrorBoundary from '../../../errorBoundary/errorBoundary';
import { Loader } from '../../../utilits/Loader/Loader';
import { Pagination } from '../../../utilits/Pagination/Pagination';
import { usePagination } from '../../../hooks/usePagination';



export const History = () => {
inUser();
const email = useAppSelector(state => state.user.email);
const {data, isLoading, isError, refetch} = useFetchHistoryQuery(email);
useEffect(() => {
  refetch()
})
const dispatch = useDispatch();
const pages = 5;
const {arrPages, page, handleNextPage, handlePageClick, handlePrevPage} = usePagination(data?.length, pages);
if (isError) return <ErrorBoundary />
if (isLoading) return <Loader />
  return (
    <div>
      {history?.length !== 0? 
        <ul className='history-ul'>
          {data?.slice((page - 1)*pages, page*pages).map((his: string) => {
              return <button key={his + 1}
              className='history-btn' 
              onClick={() =>  dispatch(setSearch({
               search:his
             }))}>
               <Link to={`/search/${his}`}>{his}</Link></button>
          })}
        </ul>
    :
    <div>No history</div>}
<Pagination arrPages={arrPages} page={page} handleNextPage={handleNextPage} handlePageClick={handlePageClick} handlePrevPage={handlePrevPage} pages={pages}/>
   </div>
  )
}
