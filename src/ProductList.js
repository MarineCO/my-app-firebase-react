import React, { Component } from 'react';
//import * as firebase from 'firebase';
import AddToCart from './AddToCart';

class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [
				{
					id: 1,
					name: "Casque",
					price: 150
				},
				{
					id: 2,
					name: "Ordinateur",
					price: 1300
				},
				{
					id: 3,
					name: "Chargeur",
					price: 30 
				}
			]
		}
	}
	render() {
		const productList = this.state.products.map(product => {
			return <li key={ product.id }> { product.name } : { product.price } euros <AddToCart /></li>
		});
		return (
			<div>
				<ul>{ productList }</ul>
			</div>
		)
	}
}

export default ProductList;