import React from 'react'
import { Coctail } from '../../components/Coctail/Coctail';
import { IDrink } from '../../types/types';
import { useGetAllCoctailQuery } from '../../store/servise/data';
import'../../scss/Main.scss'
import { Loader } from '../../utilits/Loader/Loader';
import { inUser } from '../../hooks/inUser';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';

export const Main = () => {
  // inUser()
const {data, isLoading} = useGetAllCoctailQuery('');
const user = useAppSelector(state => state.user.email)
console.log(user);
  return (
    <div>
    {isLoading? <Loader / > 
    :
    <div className='drinks-card'>
    {data && data?.drinks?.map((drink: IDrink) => {
      return <Coctail key={drink.idDrink} drink={drink} />
    })}
   </div>
    }
    </div>
  )
}
