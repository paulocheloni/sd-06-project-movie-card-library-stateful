import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import movies from '../data'

class MovieLibrary extends React.Component {
  constructor(props) {
    super (props);

    this.state = {
      searchText: '',
bookmarkedOnly: false,
selectedGenre: '',
movies: {movies},
    }
  }

  render() {
    return (
      <div>
        <SearchBar />
        <MovieList />
        <AddMovie onClick={onClick} />
      </div>
    )
  }
}

export default MovieLibrary;