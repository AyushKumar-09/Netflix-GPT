import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name :'gpt',
    initialState:{
        showGptSearch:false,
        movieResult:null,
        moviesName:null,
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch;
        },
        addGptMovieResult:(state,action)=>{
            const {moviesName,movieResult}= action.payload;
            state.moviesName= moviesName;
            state.movieResult = movieResult;
        },
    },
});

export const {toggleGptSearchView, addGptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;