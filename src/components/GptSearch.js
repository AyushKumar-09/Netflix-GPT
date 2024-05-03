import React from 'react'

import GptMovieSuggestion from './GptMovieSuggestion'
import SearchBar from './SearchBar';
import { BG_URL } from '../utils/constans';

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
        className='h-screen object-cover md:w-screen'
          src={BG_URL}
          alt="bg image" />
      </div>
      <div className=''>

        <SearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch
