import React from 'react'
import'../../scss/Search.scss';
import {  useGetSearchQuery } from '../../store/servise/data';
import { Loader } from '../../utilits/Loader/Loader';
import { Coctail } from '../../components/Coctail/Coctail';
import { typeResponse } from '../../types/typeContext';
import { getSearch } from '../../localStorage/getSearch';
import { inUser } from '../../hooks/inUser';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';

export const Search = () => {
 inUser()
  const search = getSearch()
  const {data, isLoading} = useGetSearchQuery(search);

  const ser = useAppSelector(state => state.search.search)
  console.log(ser)
  return (
    <div>
   {data !== null ? isLoading? <Loader /> 
    : (
      <div className='drinks-card'>
    {data && data.map((drink: typeResponse) => {
      return <Coctail key={drink.idDrink} id={drink.idDrink}/>
    })}
   </div>): <h1> No coctails</h1>}
    </div>
  )
}
