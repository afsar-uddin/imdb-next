'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
    const [search, setSearch] = useState('');
    const router = useRouter();
    const handleSubmit = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`);
    }
  return (
    <form className="flex align-middle max-w-6xl m-auto" onSubmit={handleSubmit}>
        <input 
        type="text" 
        placeholder='Search...' 
        className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-amber-600 disabled:text-gray-500 " disabled={!search}>Search</button>
    </form>
  )
}