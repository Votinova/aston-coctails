import React, {useEffect} from 'react'
import { Cart } from '../../components/Cart';
import { IElement } from '../../types/types';
import { useGetElementQuery } from '../../store/servise/data';

import { Loader } from '../../utilits/Loader/Loader';
import { inUser } from '../../hooks/inUser';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';


export const Element = () => {
  inUser()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const id = useAppSelector(state => state.element.id)
const {data, isLoading} = useGetElementQuery(id);
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
