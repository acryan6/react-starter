import React from 'react';
import MovieList from './MovieList.js';
// import MovieItem from './MovieItem.js';
import './../main.css';

class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {

    };

  }

  render(){
    return(
      // <div>
      //   <input type="text" placeholder="Looking for a movie...?">
      // </div>
      <div>
        <MovieList movies={movies}/>
      </div>
  )}
};

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
