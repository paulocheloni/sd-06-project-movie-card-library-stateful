import React, { Component } from 'react';
import SelectInput from './SelectInput';

class SearchBar extends Component {
  render() {

    const {
      searchText, onSearchTextChange, bookmarkedOnly,
      onBookmarkedChange, selectedGenre, onSelectedGenreChange
    } = this.props;

    return (
      <form data-testid="search-bar-form">
        <label data-testid="text-input-label">
          Inclui o texto:
          <input
            type="text"
            value={searchText}
            onChange={onSearchTextChange}
            data-testid="text-input"
          />
        </label>
        <label data-testid="checkbox-input-label">
          Mostrar somente favoritos
          <input
            type="checkbox"
            checked={bookmarkedOnly}
            onChange={onBookmarkedChange}
            data-testid="checkbox-input"
          />
        </label>
        <SelectInput
          id="select-input"
          labelText="Filtrar por gênero"
          onChange={onSelectedGenreChange}
          optionId="select-option"
          value={selectedGenre}
        />
      </form>
    );
  }
}

export default SearchBar;
