import React from 'react';
import Header from "./Header";
import useNowPLayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComing from '../hooks/useUpComing';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPLayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();


  return (
    <div>
      <Header />
      {
        showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>)
      }



    </div>
  );
};

export default Browse;
