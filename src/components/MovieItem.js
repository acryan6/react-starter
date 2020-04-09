import React from 'react';

class MovieItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      show: true
    };
  }

  render() {
    return (
      <div id={this.props.title}>
        {
          this.state.show ? <div>{this.props.movie.title}</div> : null
        }
      </div>
    )
  }

}


export default MovieItem;