import React, { Component } from 'react';

class AddMovie extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);

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
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleClick() {
    const { onClick } = this.props;
    onClick(this.state);

    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  }

  renderTitleInputLabel() {
    return (
      <label data-testid="title-input-label" htmlFor="title-input-label">
      Título:
      <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.onChange}
        data-testid="title-input"
        id="title-input-label"
      />
      </label>
    );
  }

  renderSubtitleInputLabel() {
    return (
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input-label">
      Subtítulo:
      <input
        type="text"
        name="subtitle"
        value={this.state.subtitle}
        onChange={this.onChange}
        data-testid="subtitle-input"
        id="subtitle-input-label"
      />
      </label>
    );
  }

  renderImageInputLabel() {
    return (
      <label data-testid="image-input-label" htmlFor="image-input-label">
      Imagem:
      <input
        type="text"
        name="imagePath"
        value={this.state.imagePath}
        onChange={this.onChange}
        data-testid="image-input"
        id="image-input-label"
      />
      </label>
    );
  }

  renderStorylineInputLabel() {
    return (
      <label data-testid="storyline-input-label" htmlFor="storyline-input-label">
      Sinopse:
      <textarea
        name="storyline"
        value={this.state.storyline}
        onChange={this.onChange}
        data-testid="storyline-input"
        id="storyline-input-label"
      />
      </label>
    );
  }

  renderRatingInputLabel() {
    return (
      <label data-testid="rating-input-label" htmlFor="rating-input-label">
      Avaliação:
      <input
        type="number"
        name="rating"
        value={this.state.rating}
        onChange={this.onChange}
        data-testid="rating-input"
        id="rating-input-label"
      />
      </label>
    );
  }

  render() {
    return (
      <form action="" data-testid="add-movie-form">
        <div>{this.renderTitleInputLabel()}</div>
        <div>{this.renderSubtitleInputLabel()}</div>
        <div>{this.renderImageInputLabel()}</div>
        <div>{this.renderStorylineInputLabel()}</div>
        <div>{this.renderRatingInputLabel()}</div>
      </form>
    );
  }
}

export default AddMovie;
