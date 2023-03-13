import React, { useState } from 'react';
import Search from '../search/search';
import Container from '../container/container';
import axios from 'axios';
import './movies.scss';


//const API_URL = "https://api.themoviedb.org/3/";
//const API_KEY = "ef2f8bcbdd33a5b5f53e7b67be6833d4";

const Movies = () => {
  //states
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

 //Consume the API
   const searchMovie = async (e) => {
       e.preventDefault();

       const API_KEY = "ef2f8bcbdd33a5b5f53e7b67be6833d4";
       const API_URL = "https://api.themoviedb.org/3/"; 
       const apiURI = `${API_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`;
       //const apiURI = `https://api.themoviedb.org/3/search/movie?api_key=ef2f8bcbdd33a5b5f53e7b67be6833d4&language=en-US`;

       try {
           const response = await axios.get(apiURI);
           const data = response.data.results
           console.log(data);

          //setState
           setMovies(data);

       } catch (err) {
           console.error(err);
       }
   }


   return (
    <>
     <Search
       searchMovie={searchMovie}
       query={query}
       setQuery={setQuery}
       movies={movies}
     />
    </>
   )
}

export default Movies;
