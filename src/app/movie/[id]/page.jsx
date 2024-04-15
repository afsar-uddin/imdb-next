import Image from 'next/image';
import React from 'react'
import { FiThumbsUp } from 'react-icons/fi';

export default async function MoviePage({params}) {
    const movieId = params.id;
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    const movie = await res.json();

  return <div className='w-full'>
        <div className='flex p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
            <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} width={500} height={300} className='sm:rounded-t-lg' style={{maxWidth: '100%', height: '100%'}}></Image>
        <div className="">
            <h2 className='text-lg mb-3 font-bold'>{movie.title}</h2>
            <p className='text-lg- mb-3'>{movie.overview}</p>
            <p><span className='font-bold'>Release Date: </span>{movie.release_date || movie.first_air_date}</p>
            <p className='flex align-center'><FiThumbsUp /> {movie.vote_count}</p>
        </div>
        </div>
    </div>
  
}
