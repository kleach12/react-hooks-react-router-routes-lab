import React from "react";
import { movies } from "../data";

function Movies() {

  const movieArr = movies.map((movie) => (
    <div key = {movie.time}>
      <h2>{movie.title}</h2>
      <div>{movie.time}</div>
      <ul>
          {movie.genres.map((genre) => 
            <li key = {genre}>{genre}</li>
          )}
      </ul>
    </div>
  ))
  
  return (
  <div>
    <h1>Movies Page</h1>
    {movieArr}
  </div>
  )
}

export default Movies;
