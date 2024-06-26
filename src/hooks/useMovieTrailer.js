import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constans";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useMovieTrailer=(movieId)=>{
    const dispatch= useDispatch();

    const trailerVideo = useSelector((store)=> store.movies.trailerVideo);
    
    const getMovieVideos= async ()=> {
        const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
        const json = await data.json();
        // console.log(json);

        const filterdata = json.results.filter(video => video.type=="Trailer");


        const trailer = filterdata.length? filterdata[0]: json.results[0]; 
        // console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    useEffect (()=>{
        !trailerVideo && getMovieVideos();
    },[]);

};
export default useMovieTrailer;