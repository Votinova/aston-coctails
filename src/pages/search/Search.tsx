import React from 'react'
import'../../scss/Search.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../../components/Coctail';
import { typeResponse } from '../../types/typeContext';

export const Search = () => {
  const search = useSelector((state: RootState) => state.search.search);
  const {data, isLoading} = useGetSearchQuery(search);

  return (
    <div>
   {data !== null ? isLoading? <Loader /> 
    : (
      <div className='drinks-card'>
    {data && data.map((drink: typeResponse) => {
      return <Coctail key={drink.idDrink} data={drink}/>
    })}
   </div>): <h1> No coctails</h1>}
    </div>
  )
}
