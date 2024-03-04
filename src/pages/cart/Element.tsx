import React from 'react'
import './element.scss';
import { Cart } from './Cart';
import { IElement } from '../../types/typeContext';
import { useGetElementQuery } from '../../store/servise/data';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Loader } from '../../utilits/Loader/Loader';

export const Element = () => {
const id = useSelector((state: RootState) => state.element.id);
const {data, isError, isLoading} = useGetElementQuery(id);

  return (
    <div>
      {isLoading?
      <Loader />
      :
      <div className='element'>
      {data && data?.drinks?.map((element: IElement) => {
       return <Cart key={element.idDrink} data={element}/>
      })}
     </div>
    }
    </div>
  )
}
