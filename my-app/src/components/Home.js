
import React, { Component } from 'react'
// conenct is a function to bring back a higher order component
import { connect } from 'react-redux'


class Home extends Component {
	render() {
		console.log(this.props)
		const { todos } = this.props;
		return (
			<div className="container">
				<h4 className="center">Home</h4>
				<p>Welcome to the Wedding Planning todo app. This app can help you organise your big day</p>
			</div>
			
		)
	}
}

		// get access to state of store and map to props
		const mapStateToProps = (state) => {
			return {
				// call store state and map to props
				todos: state.todos
			}
		}
	
// connect is a function that brings in hoc and then wraps home in the hoc and we connect Home to redux store.
// pass in mapStateProps to apply data to this component
export default connect(mapStateToProps)(Home)