import React, { Component } from 'react';


class AddMovie extends Component {
	constructor() {
		super();
		this.state = {
			subtitle: '',
			title: '',
			imagePath: '',
		  storyline: '',
		  rating: 0,
		  genre: 'action',
		};
	}
	

	render() {
		const { title, subtitle, imagePath, storyline, rating, genre } = this.props
		return ( 
		<form data-testid="add-movie-form">

		</form> )
	}
}

AddMovie.propTypes = { onClick: PropTypes.func.isRequired };

export default AddMovie;
