import React, { Component } from 'react';
import App from './App';

class Cake extends Component {
	render() {
		// destructuring props to variables
		const { cakes } = this.props;
		return (
			<div className="Cake">
				<div>Baker</div>
				<div>budget</div>
				<div>Cover: { name }</div>
			</div>
		);
	}
}

export default Cake;