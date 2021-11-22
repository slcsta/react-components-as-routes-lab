import React from 'react';
import { actors } from '../data';

const Actors = () => {
  console.log(actors)
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return <div key={actor.name}>{actor.name}
          {actor.movies.map(movie => {
            return <li key={movie}>{movie}</li>
          })}
        </div>
      })}
    </div>
  );
};

export default Actors;
