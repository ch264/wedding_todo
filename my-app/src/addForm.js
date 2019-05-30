import React, {Component} from 'react'

class AddTodo extends Component {
	state = {
		content: ''
	}

	changeHandler = (e) => {
		this.setState({
			content: e.target.value
		})
	}

	submitHandler = (e) => {
		e.preventDefault();
		this.props.addTodo(this.state);
	}

	render(){
		return (
			<div>
				<form onSubmit={this.submitHandler}>
					<label>Add Todo</label>
					<input type="text" onChange={this.changeHandler} />
				</form>
			</div>
		)
	}
}

export default AddTodo