import React from "react";
import { movies } from "../data";

function Movies() {
const movieItems =  movies.map((movie)=>{
          <div key={movie.title} > 
                <h2>{movie.time}</h2>
                <ul>
                  {movies.map((movie)=>
                      <li key={movie.genres}>{movie.genres}</li> //need only the genres
                  )}
                </ul>
          </div>
  })

  return <div>
    <h1>Movies Page </h1>
    {movieItems}
  </div>;
}

export default Movies;
