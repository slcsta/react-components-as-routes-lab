import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map(movie => {
          return <div key={movie.title}>{movie.title}
          {movie.time}
          {movie.genres.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
          </div>
        })}
    </div>
  );
};

export default Movies;
