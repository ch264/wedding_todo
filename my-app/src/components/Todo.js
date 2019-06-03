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

	
	handleClick = () => {
		this.props.deleteTodo(this.props.todo.id);
		// redirect user after click 
		this.props.history.push('/');
	}

	render() {
		console.log(this.props)
		const todos = this.props.todo ? (
			<div className="todo">
				<h4 className="center">{this.props.todo.content}</h4>
				<div className="center">
			</div>
			</div>
			
		) : (
			<div className="center">Loading Todo...</div>
		)
		return (
			<div className="container">
				<h4>{this.props.todo}</h4>
				<button className="btn grey" onClick={this.handleClick}>Delete</button>
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

const mapDispatchToProps = (dispatch) => {
	// return what we want to map to the functions of this component
	return {
		// id of post we want to delete. action, payload we want to send is id. on click make a dispatch and send this function to the root reducer
		deleteTodo: (id) => { dispatch({type: 'DELETE_TODO', id})}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Todo)