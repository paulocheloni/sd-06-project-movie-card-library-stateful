import React from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import Header from './components/Header';

function App() {
  const {
    searchText,
    onSearchTextChange,
    bookmarkedOnly,
    onBookmarkedChange,
    selectedGenre,
    onSelectedGenreChange,
  } = this.props;

  return (
    <div className="App">
      <Header />
      <SearchBar
        searchText={searchText}
        onSearchTextChange={onSearchTextChange}
        bookmarkedOnly={bookmarkedOnly}
        onBookmarkedChange={onBookmarkedChange}
        selectedGenre={selectedGenre}
        onSelectedGenreChange={onSelectedGenreChange}
      />
    </div>
  );
}

export default App;
