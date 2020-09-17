import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange } = this.props;
    return (
      <form data-testid="search-bar-form">
        <fieldset>
          <label data-testid="text-input-label">Inclui o texto
            <input
              type="text"
              data-testid="text-input"
              id="text-input"
              value={searchText}
              onChange={onSearchTextChange}
            />
          </label>
          <label data-testid="checkbox-input-label">Mostrar somente favoritos
            <input
              type="checkbox"
              checked={bookmarkedOnly}
              id="fav-checkbox"
              onChange={onBookmarkedChange}
              data-testid="checkbox-input"
            />
          </label>
        </fieldset>
        <fieldset>
          <label data-testid="select-input-label">Filtrar por gênero
            <select id="movie-type" value={selectedGenre} onChange={onSelectedGenreChange} data-testid="select-input">
              <option data-testid="select-option" value="">Todos</option>
              <option data-testid="select-option" value="action">Ação</option>
              <option data-testid="select-option" value="comedy">Comédia</option>
              <option data-testid="select-option" value="thriller">Suspense</option>
            </select>
          </label>
        </fieldset>
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
// searchText, uma string
// onSearchTextChange, uma callback
// bookmarkedOnly, um boolean
// onBookmarkedChange, uma callback
// selectedGenre, uma string
// onSelectedGenreChange, uma callback
