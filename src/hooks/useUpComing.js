import { useDispatch, useSelector } from "react-redux";
import {  addUpComing } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constans";
import { useEffect } from "react";

 const useUpComing=()=>{
    const dispatch = useDispatch();
    const upComing = useSelector((store)=> store.movies.upComing);

  const getUpComingMovies= async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);

    const json = await data.json();
    // console.log(json.results);
    dispatch(addUpComing(json.results));
  };

  useEffect(()=>{
    !upComing && getUpComingMovies();
  },[]);

 };
 export default useUpComing;

