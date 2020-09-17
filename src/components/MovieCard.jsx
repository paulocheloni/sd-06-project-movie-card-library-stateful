import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="movie-card" data-testid='movie-card'>
        <img alt="Movie Cover" className="movie-card-image" src={imagePath} />
        <div className="movie-card-body">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <Rating rating={rating} />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  movie: {
    title: 'title',
    subtitle: 'subtitle',
    storyline: 'storyline',
    rating: 'rating',
    imagePath: 'imagePath',
  },
};

MovieCard.propTypes = {
  movie: {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.string,
    imagePath: PropTypes.string,
  },
};

export default MovieCard;
