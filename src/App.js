import React from 'react';
import './App.css';
import './data.js';
import Header from './components/Header';
import MovieLibrary from './components/MovieLibrary';


function App() {
  return (
    <div className="App">
      <Header />
      <MovieLibrary movies={movies} />
    </div>
  );
}

export default App;
