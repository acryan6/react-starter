import React from 'react';
import MovieItem from './MovieItem.js';

const MovieList = (props) => (
  <div>
     {props.movies.map(movie =>
       <MovieItem movie={movie} title={movie.title} key={movie.title}/>
     )}
  </div>
);



export default MovieList;
