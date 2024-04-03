"use client";

import React, { useEffect } from 'react'

export default function error({error}) {
    useEffect(() => {
      console.log(error);
    }, [error])
  return (
    <div className='text-center mt-10'>
        <h1>Error, Something went wrong...!</h1>
        <button className='hover:text-amber-600 ' onClick={()=> reset()}>
          Try again
        </button>
    </div>
  )
}
