import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { 
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
     } = this.props;
    return (
      <div>
        <span>SearchBar Component</span>
        <form data-testid="search-bar-form">
          <span>SearchBar FORM</span>
        </form>
      </div>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired, 
};

export default SearchBar;
