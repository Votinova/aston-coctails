import React, {useEffect} from 'react'
import '../../scss/element.scss';
import { Cart } from '../../components/Cart';
import { IElement } from '../../types/typeContext';
import { useGetElementQuery } from '../../store/servise/data';
import { getElementId } from '../../localStorage/getElementId';
import { Loader } from '../../utilits/Loader/Loader';


export const Element = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const id = getElementId()
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
