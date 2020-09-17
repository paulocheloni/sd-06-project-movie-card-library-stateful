import React from 'react';


class AddMovie extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleClickSend = this.handleClickSend.bind(this);

    this.state = {
      subtitle:'',
      title:'',
      imagePath:'',
      storyline: '', 
      rating:0,
      genre:'action'
    }
}
    handleChange({target}) {
      const {name} = target;
        
      this.setState({
        [name]:target.value
      })
/*
        handleClickSend({target}) {
            // codigo
        }
*/
    }
    render() {
      return (
        <form>
          <label data-testid="title-input-label">Título
            <input data-testid="title-input" onChange={this.handleChange} />
          </label>
          <br />
          <label data-testid="subtitle-input-label">Subtítulo
            <input data-testid="subtitle-input" onChange={this.handleChange} />
          </label>
          <br />
          <label data-testid="image-input-label">Imagem
            <input data-testid="image-input" onChange={this.handleChange} />
          </label>
          <br />
          <label data-testid="storyline-input-label">Sinopse
            <textarea data-testid="storyline-input" onChange={this.handleChange} />
          </label>
          <br />
          <label data-testid="rating-input-label">Avaliação
            <textarea type="number" data-testid="rating-input" onChange={this.handleChange} />
          </label>
          <br />
          <label data-testid="genre-input-label">Gênero
            <select data-testid="genre-input" onChange={this.handleChange}>
              <option value="action" data-testid="genre-option">Ação</option>
              <option value="comedy" data-testid="genre-option">Comedy</option>
              <option value="thriller" data-testid="genre-option">Suspense</option>
            </select>
          </label>
          <br />
          <button data-testid="send-button" onClick={this.handleClickSend}>Adicionar filme</button>
          </form>
        )
    }
}

export default AddMovie;
