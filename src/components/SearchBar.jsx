import React, { Component } from 'react';

class SearchBar extends Component {
  // searchText, uma string
  // onSearchTextChange, uma callback
  // bookmarkedOnly, um boolean
  // onBookmarkedChange, uma callback
  // selectedGenre, uma string
  // onSelectedGenreChange, uma callback
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
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            data-testid="text-input"
            type="text"
            name="searchText"
            value={searchText}
            onChange={onSearchTextChange}
            maxLength="40"
            required="required"
          ></input>
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            data-testid="checkbox-input"
            type="checkbox"
            name="name"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
          />
        </label>
        <label data-testid="select-input-label">
          Filtrar por gênero
          <select
            data-testid="select-input"
            value={selectedGenre}
            onChange={onSelectedGenreChange}
          >
            <option data-testid="select-option" value="">
              Todos
            </option>
            <option data-testid="select-option" value="action">
              Ação
            </option>
            <option data-testid="select-option" value="comedy">
              Comédia
            </option>
            <option data-testid="select-option" value="thriller">
              Suspense
            </option>
          </select>
        </label>
      </form>
    );
  }
}

export default SearchBar;
