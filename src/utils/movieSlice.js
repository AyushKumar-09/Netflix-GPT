import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name : "movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo : null,
        popularMovies:null,
        topRated:null,
        upComing:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies = action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated=action.payload
        },
        addUpComing:(state,action)=>{
            state.upComing=action.payload
        },
        addTrailerVideo : (state,action)=>{
            state.trailerVideo=action.payload;
        },
        
    },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpComing} = moviesSlice.actions;
export default moviesSlice.reducer;