import React from 'react'
import { IElement } from '../types/types'
import { Ingridient } from './Ingridient'

export const Ingridients = (props : {data: IElement}) => {
  return (
    <ul>
    <Ingridient data={props.data.strIngredient1} />
    <Ingridient data={props.data.strIngredient2} />
    <Ingridient data={props.data.strIngredient3} />
    <Ingridient data={props.data.strIngredient4} />
    <Ingridient data={props.data.strIngredient5} />
    <Ingridient data={props.data.strIngredient6} />
    <Ingridient data={props.data.strIngredient7} />
    <Ingridient data={props.data.strIngredient8} />
    <Ingridient data={props.data.strIngredient9} />
    <Ingridient data={props.data.strIngredient10} />
    <Ingridient data={props.data.strIngredient11} />
    <Ingridient data={props.data.strIngredient12} />
    <Ingridient data={props.data.strIngredient13} />
    <Ingridient data={props.data.strIngredient14} />
    <Ingridient data={props.data.strIngredient15} />
    <Ingridient data={props.data.strIngredient16} />
    </ul>

  )
}
