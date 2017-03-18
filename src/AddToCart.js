import React, { Component } from 'react';
//import * as firebase from 'firebase';

class AddToCart extends Component {

	onClick = (event) => {
		event.preventDefault();
		console.log('click ok');
	}

	render() {
		return (
			<button onClick={ this.onClick }>
				+
			</button>
		)
	}
}

export default AddToCart;