import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {FiThumbsUp} from 'react-icons/fi'

export default function Card({result}) {
  return (
    <div className='group m-1 cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2  transition-shadow-200'>
        <Link href={`/movie/${result.id}`} className=''>
            <Image src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} width={500} height={300} className='sm:rounded-t-lg group-hover:opacity-65 transition-opacity duration-300'></Image>
            <div className='my-1 px-2'>
                <h2 className='text-lg font-bold truncate'>{result.title || result.name}</h2>
                <p className='line-clamp-2'>{result.overview}</p>
                <p>Release Date: {result.release_date || result.first_air_date}</p>
                <p className='flex gap-1 items-center my-2'><FiThumbsUp/>{result.vote_count}</p>
            </div>
        </Link>
    </div>
  )
}
