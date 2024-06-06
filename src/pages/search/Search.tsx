import React from 'react'
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../../components/Coctail/Coctail';
import { typeResponse } from '../../types/types';
import { getSearch } from '../../localStorage/getSearch';
import { inUser } from '../../hooks/inUser';
import ErrorBoundary from '../../errorBoundary/errorBoundary';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../../utilits/Pagination/Pagination';
import '../../scss/Main.scss'


export const Search = () => {
  inUser();
  const search = getSearch();
  const {data, isLoading, isError} = useGetSearchQuery(search);
  const pages = 10;
  const {arrPages, page, handleNextPage, handlePageClick, handlePrevPage} = usePagination(data?.length, pages);

  if (isError) return <ErrorBoundary />
  if (isLoading) return <Loader />
  return (
    <div>
   {data !== null ? 
    <div className='drinks-card'>
    {data && data?.slice((page - 1)*pages, page*pages).map((drink: typeResponse) => {
      return <Coctail key={drink.idDrink} drink={drink}/>
    })}
   </div>: <h1>По вашему запросу ничего не найдено</h1>}
   <Pagination arrPages={arrPages} page={page} handleNextPage={handleNextPage} handlePageClick={handlePageClick} handlePrevPage={handlePrevPage} pages={pages}/>
   </div>
  )
}
