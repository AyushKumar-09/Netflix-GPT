import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from '../utils/constans';
import { addGptMovieResult } from '../utils/GptSlice';


const SearchBar = () => {

  const dispatch = useDispatch();
  const languagekey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  


  const searchMovieTMDB= async(movie)=>{

    const data= await fetch("https://api.themoviedb.org/3/search/movie?query="+ movie+"&include_adult=false&language=en-US&page=1", API_OPTIONS);

    const json =await data.json();

    return json.results;
  };

  const handleGptSearchClick = () => {
  
      const query= "Act as a movie recommendation system and suggest some movies for the query"+searchText.current.value+"only give names of 5 movies ,comma seprated and if there is comma in the name of the movie remove the comma like th example given ahead Example : The Sword in the Stone, Stardust, The Princess Bride ";
    // api call

    const genAI = new GoogleGenerativeAI(OPENAI_KEY);
    async function run() {
      // For text-only input, use the gemini-pro model
      console.log("call made");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const prompt = query;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();
      
      console.log(text);
      // array of the movie from gemini
      const movieList = text.split(",") ;
      // console.log(movieList);
      const moviesRecommend= movieList.map ( movie => searchMovieTMDB(movie));

      const tmdbResult= await Promise.all(moviesRecommend);
      console.log(tmdbResult);
      dispatch(addGptMovieResult(
        {moviesName: movieList,movieResult :tmdbResult}));
    }
    run();


  };


  return (
    <div className='pt-[50%] md:pt-[10%] flex justify-center'>
      <form className='  md:w-1/2 bg-black grid grid-cols-12'
        onSubmit={(e) => e.preventDefault()}>

        <input
          ref={searchText}
          type="text" className='p-4 m-4  col-span-9' placeholder={lang[languagekey].gptPlaceholder} />

        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg '
          onClick={handleGptSearchClick}
        >
          {lang[languagekey].search}
        </button>
      </form>
    </div>
  )
}

export default SearchBar;
