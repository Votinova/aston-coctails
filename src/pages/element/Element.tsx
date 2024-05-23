import React, {useEffect} from 'react'
import { Cart } from '../../components/Cart';
import { IElement } from '../../types/typeContext';
import { useGetElementQuery } from '../../store/servise/data';
import { getElementId } from '../../localStorage/getElementId';
import { Loader } from '../../utilits/Loader/Loader';
import { inUser } from '../../hooks/inUser';


export const Element = () => {
  inUser()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const id = getElementId()
const {data, isLoading} = useGetElementQuery(id);
console.log(data)
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
