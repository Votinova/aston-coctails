import React from 'react'
import { Coctail } from '../../components/Coctail/Coctail';
import { IDrink } from '../../types/types';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'../../scss/Main.scss'
import { Loader } from '../../utilits/Loader/Loader';
import ErrorBoundary from '../../errorBoundary/errorBoundary';
import { usePagination } from '../../hooks/usePagination';
import { Pagination } from '../../utilits/Pagination/Pagination';

export const Main = () => {
const {data, isLoading, isError} = useGetAllCoctailQuery('');
const pages = 10;
const {arrPages, page, handleNextPage, handlePageClick, handlePrevPage} = usePagination(data?.drinks?.length, pages);
if (isLoading) return <Loader />;
if (isError) return <ErrorBoundary />
  return (
    <div>
    <div className='drinks-card'>
    {data && data?.drinks?.slice((page - 1)*pages, page*pages).map((drink: IDrink) => {
      return <Coctail key={drink.idDrink} drink={drink} />
    })}
   </div>
   <Pagination arrPages={arrPages} page={page} handleNextPage={handleNextPage} handlePageClick={handlePageClick} handlePrevPage={handlePrevPage} pages={pages}/>
    </div>
  )
}
