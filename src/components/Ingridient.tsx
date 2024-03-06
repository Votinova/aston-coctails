import React from 'react';
import PropTypes from 'prop-types';

export const Ingridient = (props : {data: string | null}) => {
 return (
    <div>
       {props.data? <li>{props.data}</li> : ''}
    </div>
  )
}
Ingridient.PropTypes = {
   data: PropTypes.string
}