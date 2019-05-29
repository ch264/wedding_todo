// form component

import React, { Component } from 'react';

class AddItem extends Component {

	state = {
		name: null,
	}

	handleChange = (e) => {
		this.setState({
			// update formfield with the corresponding ID and grab correct state property
			[e.target.id]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		// pass in state object to function
		this.props.addItemFunc(this.state);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name: </label>
					<input type="text" id="name" onChange={this.handleChange } />
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddItem;