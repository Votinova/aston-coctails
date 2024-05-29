import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import '../../scss/Loader.scss'
export const Loader = () => {
  return (
    <div className='loader'>
      <Hourglass
      visible={true}
      height="80"
      width="80"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass=""
      colors={['#000', '#000']}
      />
    </div>
  )
}
