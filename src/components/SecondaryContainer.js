import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies);
  return ( 
    movies.nowPlayingMovies &&(
    <div className='bg-black pr-2 md:pr-0'>
      <div className='mt-0 md:-mt-52 pl-2 pr-3 md:pl-12 relative z-20 '>
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Top Rated"} movies={movies.topRated}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming Movies "} movies={movies.upComing}/>
    
    </div>
    </div>
    )
  );
};

export default SecondaryContainer
