import React, {useEffect} from 'react'
import { Cart } from '../../components/Cart/Cart';
import { IElement } from '../../types/types';
import { useGetElementQuery } from '../../store/servise/data';

import { Loader } from '../../utilits/Loader/Loader';
import { inUser } from '../../hooks/inUser';
import { useAppSelector } from '../../hooks/typescriptHooks/typescript';
import ErrorBoundary from '../../errorBoundary/errorBoundary';


export const Element = () => {
  inUser()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
const id = useAppSelector(state => state.element.id)
const {data, isLoading, isError} = useGetElementQuery(id);
if (isLoading) return <Loader />;
if (isError) return <ErrorBoundary />
  return (
    <div>
      <div className='element'>
      {data && data?.drinks?.map((element: IElement) => {
       return <Cart key={element.idDrink} data={element}/>
      })}
     </div>
    </div>
  )
}
