import React from "react";
import { directors } from "../data";

function Directors() {

  const directorsItem  = directors.map((director) =>  (
    <div key = {director.name}>
      <h2>{director.name}</h2>
      <ul>
        {director.movies.map((movie) => <li key = {movie}> {movie}</li>)}
      </ul>
    </div>
  ))

  return (
  <div>
    <h1>Directors Page</h1>
    {directorsItem}
  </div>
  )
}

export default Directors;
