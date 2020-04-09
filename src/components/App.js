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

  handleInputChange(e) {
    this.setState({
      searchInput: e
    }, () => {
      console.log(e)
    });
  };

  handleSubmit(e) {
    this.preventDefault;
  }

  render(){
    return(
      <div>
        <div>
          <SearchBar inputChange={this.handleInputChange.bind(this)}/>
        </div>
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
