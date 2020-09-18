import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import PropTypes from 'prop-types';


class MovieLibrary extends Component {
  constructor(props) {
    super();

    this.getMovieDefaultState = this.getMovieDefaultState.bind(this);
    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);

    this.state = {
      movies: props.movies,
      bookmarkedOnly: false,
      searchText: '',
      selectedGenre: '',
    };
  }

  getMovieDefaultState() { this.setState({ movies: this.props.movies }); }

  onSearchTextChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

    const nameFiltered = this.state.movies.find((item) => {
      const stringToBeFound = value.toLowerCase();

      const titleString = item.title.toLowerCase().split(' ');
      const subtitleString = item.subtitle.toLowerCase().split(' ');
      const storylineString = item.storyline.toLowerCase().split(' ');

      if (titleString.includes(stringToBeFound) || subtitleString.includes(stringToBeFound) ||
        storylineString.includes(stringToBeFound)) {
        return item;
      }

      return '';
    });

    if (nameFiltered === '') {
      this.getMovieDefaultState();
    } else {
      this.setState({ movies: [nameFiltered] });
    }
  }

  onBookmarkedChange({ target }) {
    const { name, checked } = target;
    this.setState({ [name]: checked });

    const bookmarked = this.state.movies.filter((item) => item.bookmarked === true);

    if (checked === true) {
      this.setState({ movies: bookmarked });
    } else {
      this.getMovieDefaultState();
    }
  }

  onSelectedGenreChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });

    const genreFiltered = this.state.movies.filter((item) => item.genre === value);

    if (genreFiltered.length === 0) {
      this.getMovieDefaultState();
    } else {
      this.setState({ movies: genreFiltered });
    }
  }

  render() {
    return (
      <div>
        <h2>My awesome movie library</h2>
        <SearchBar
          onSearchTextChange={this.onSearchTextChange} searchText={this.state.searchText}
          onBookmarkedChange={this.onBookmarkedChange} bookmarkedOnly={this.state.bookmarkedOnly}
          onSelectedGenreChange={this.onSelectedGenreChange}
          selectedGenre={this.state.selectedGenre}
        />
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.arrayOf(PropTypes.object).isRequired };

export default MovieLibrary;
