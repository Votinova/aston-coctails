import React from 'react'
import { Coctail } from '../../components/Coctail/Coctail';
import { IDrink } from '../../types/types';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'../../scss/Main.scss'
import { Loader } from '../../utilits/Loader/Loader';
import ErrorBoundary from '../../errorBoundary/errorBoundary';

export const Main = () => {
const {data, isLoading, isError} = useGetAllCoctailQuery('');
if (isLoading) return <Loader />;
if (isError) return <ErrorBoundary />
  return (
    <div>
    <div className='drinks-card'>
    {data && data?.drinks?.map((drink: IDrink) => {
      return <Coctail key={drink.idDrink} drink={drink} />
    })}
   </div>
    </div>
  )
}
