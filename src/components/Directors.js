import React from 'react';
import { directors } from '../data';

const Directors = () => {
  console.log(directors)
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => {
        return <div key={director.name}>{director.name}
          {director.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </div>
      })}
    </div>
  );
}

export default Directors
