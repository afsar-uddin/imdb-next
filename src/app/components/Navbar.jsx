'use client'

import React from 'react'
import NavbarItems from './NavbarItems'

export default function Navbar() {

  return (
    <div className='flex dark:bg-gray-600 bg-amber-100 p-1 lg:text-lg justify-center gap-4'>
        <NavbarItems title="Trending" param="fetchTrending" />
        <NavbarItems title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
