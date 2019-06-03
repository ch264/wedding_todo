import React, { Component } from 'react'
import { connect } from 'react-redux'

class Todo extends Component {

	// state = {
	// 	id: null
	// }
	// // fetch data in componentDidMount
	// componentDidMount() {
	// 	// identify which todo to grab by fetching id
	// 	let id = this.props.match.params.todo_id;
	// 	this.setState({
	// 		id: id
	// 	})
	// }

	render() {
		const todos = this.props.todo ? (
			<div className="todo">
				<h4 className="center">{this.props.todo.content}</h4>
			</div>
		) : (
			<div className="center">Loading Todo...</div>
		)
		return (
			<div className="container">
				<h4>{this.props.todo}</h4>
			</div>
		)
	}
}

// ownProps are props before the attached props from redux store
const mapStateToProps = (state, ownProps) => {
	let id = ownProps.match.params.todo_id;
	return {
		// state from redux store. cycle through todos on state object and return todo
		todo: state.todos.find(todo => todo.id === id)
	}
}

export default connect(mapStateToProps)(Todo)