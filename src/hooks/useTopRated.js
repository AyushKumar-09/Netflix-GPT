import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constans";
import { useEffect } from "react";

 const useTopRated=()=>{
    const dispatch = useDispatch();
    const topRated = useSelector((store)=> store.movies.topRated);

  const getTopRated= async()=>{

    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

    const json = await data.json();
    // console.log("poplar")
    // console.log(json.results);
    dispatch(addTopRated(json.results));
  };

  useEffect(()=>{
    ! topRated && getTopRated();
  },[]);

 };
 export default useTopRated;

