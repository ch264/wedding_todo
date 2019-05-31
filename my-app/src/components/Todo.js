import React, { Component } from 'react'

class Todo extends Component {

	state = {
		id: null
	}
	// fetch data in componentDidMount
	componentDidMount() {
		// identify which todo to grab by fetching id
		let id = this.props.match.params.todo_id;
		this.setState({
			id: id
		})
	}

	render() {
		return (
			<div className="container">
				<h4>{this.state.id}</h4>
			</div>
		)
	}
}

export default Todo