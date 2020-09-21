import React from 'react';
import movies from '../data';

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = { movies };
  }

  filterBookMarked(UnfilteredMovies, bookmarkedOnly) {
    if (bookmarkedOnly) {
      return UnfilteredMovies.filter(movie => movie.bookmarked === true);
    }
    return UnfilteredMovies;
  }

  filterGender(UnfilteredMovies, gender) {
    if (gender !== '') {
      return UnfilteredMovies.filter(movie => movie.genre === gender);
    }
    return UnfilteredMovies;
  }

  render() {
    let { movies } = this.props;
    const { searchText, bookmarkedOnly, selectedGenre} = this.props;
    movies = this.filterBookMarked(movies, bookmarkedOnly);
    movies = this.filterGender(movies, selectedGenre);
    return (
      <div data-testid="movie-list" className="movie-list">
        {movies.filter(movie => Object.values(movie).join('\n')
          .toLowerCase().includes(searchText.toLowerCase()))
          .map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

export default MovieList;
