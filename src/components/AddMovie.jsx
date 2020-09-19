import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddMovie extends Component {
  constructor() {
    super();

    this.onChange = this.onChange.bind(this);
    this.stateSender = this.stateSender.bind(this);

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  onChange({ target }) {
    const { name } = target;

    this.setState({ [name]: target.value });
  }

  stateSender(event) {
    event.preventDefault();
    const { onClick } = this.props;
    onClick(this.state);

    this.setState = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    console.log('Click!!');

  }

  renderInput() {
    return (
      <label htmlFor="text" data-testid="title-input-label">
        Título
        <input
          name="title"
          type="text"
          data-testid="title-input"
          defaultValue={this.state.title}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderSubtitle() {
    return (
      <label htmlFor="text" data-testid="subtitle-input-label">
        Subtítulo
        <input
          type="text"
          data-testid="subtitle-input"
          name="subtitle"
          value={this.state.subtitle}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderImageInput() {
    return (
      <label htmlFor="text" data-testid="image-input-label">
        Imagem
        <input
          type="text"
          data-testid="image-input"
          name="imagePath"
          value={this.state.imagePath}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderSinopse() {
    return (
      <label htmlFor="textarea" data-testid="storyline-input-label">
        Sinopse
        <input
          htmlFor="textarea"
          data-testid="storyline-input"
          name="storyline"
          value={this.state.storyline}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderRating() {
    return (
      <label htmlFor="number" data-testid="rating-input-label">
        Avaliação
        <input
          type="number"
          data-testid="rating-input"
          name="rating"
          value={this.state.rating}
          onChange={this.onChange}
        />
      </label>
    );
  }

  renderGenre() {
    return (
      <label htmlFor="select" data-testid="genre-input-label">
        Gênero
        <select
          data-testid="genre-input" name="genre" value={this.state.genre} onChange={this.onChange}
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  renderButton() {
    return (
      <button data-testid="send-button" onClick={this.stateSender}>
        Adicionar filme
      </button>
    );
  }

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.renderInput()}
          {this.renderSubtitle()}
          {this.renderImageInput()}
          {this.renderSinopse()}
          {this.renderRating()}
          {this.renderGenre()}
          {this.renderButton()}
        </form>
      </div>
    );
  }
}

AddMovie.defaultProps = { onClick: undefined };

AddMovie.propTypes = { onClick: PropTypes.func };

export default AddMovie;
