import React from 'react';


export const Ingridient = (props : {data: string | null}) => {
 return (
    <div>
       {props.data? <li>{props.data}</li> : ''}
    </div>
  )
}
