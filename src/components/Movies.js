import React from "react";
import { movies } from "../data";

function Movies() {
  const moviesData = movies.map(movie => (
    <div key={movie.title}>
      <h3>{movie.title}</h3>
      <p>running time: {movie.time}</p>            
        <em>Genres</em>
        <ul>
        {movie.genres.map(genre => (         
            <li key={genre}>{genre}</li>
        ))} 
        </ul>           
    </div>
  ))
  return (
    <div>
      <h1>Movies Page</h1>
        {moviesData}
    </div>
  )
}

export default Movies;
