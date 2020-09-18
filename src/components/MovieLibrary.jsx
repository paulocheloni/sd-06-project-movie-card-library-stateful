import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  render() {
    return (
      <div>
        <h2> My awesome movie library </h2>
        <SearchBar />
        <MovieList movies={this.props.movies} />
        <AddMovie onClick={this.props.onClick} />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.shape.isRequired,
  onClick: PropTypes.shape.isRequired,
};

export default MovieLibrary;
