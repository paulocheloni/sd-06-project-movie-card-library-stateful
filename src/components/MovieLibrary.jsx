import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class MovieLibrary extends React.Component {
  render() {
    return (
      <div>Essa div é do MovieLibrary
        <SearchBar />
        <MovieList movies={this.props.movies} />
      </div>
    );
  }
}

export default MovieLibrary;
