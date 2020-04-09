import React from 'react';
import MovieList from './MovieList.js';
import SearchBar from './SearchBar.js';
// import './../main.css';


class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      searchInput : ''
    };
  }

  // handleInputChange = (e) => {
  //   this.setState({
  //     searchInput: e.target.value
  //   }, () => {
  //     this.filterArray();
  //   })
  // }

  render(){
    return(
      <div>
        <form>
    <input type="text" placeholder="Looking for a movie...?"/>
    <button type="submit">Search</button>
  </form>
        <div>
          <MovieList movies={movies}/>
        </div>
      </div>
    );
  }

};

const movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

export default App;
