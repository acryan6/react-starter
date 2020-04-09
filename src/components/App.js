import React from 'react';
import MovieList from './MovieList.js';
import MovieItem from './MovieItem.js';
import SearchBar from './SearchBar.js';
// import './../main.css';


class App extends React.Component {

  constructor (props) {
    super(props);

    this.state = {
      searchInput : '',
      moviesShown: movies,
      moviesFiltered: []
    };
  }

  handleInputChange(e) {
    this.setState({
      searchInput: e
    });
  };

  handleSubmit(text) {
    for (var i = 0; i < movies.length; i++) {
      if (!(movies[i].title.toLowerCase().indexOf(text.toLowerCase()) !== -1 )) {
        // toggle show/hide div
        this.hideDiv.call(MovieItem[i]);
      }
    }
  };

  hideDiv() {
    this.setState({
      show: !this.state.show
    });
  }

  render(){
    return(
      <div>
        <div>
          <SearchBar
            inputChange={this.handleInputChange.bind(this)}
            inputSubmit={this.handleSubmit.bind(this)}
            state={this.state}
          />
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
