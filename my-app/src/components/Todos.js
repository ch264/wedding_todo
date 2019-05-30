import React from 'react'

const Todos = ({todos, deleteTodo}) => {

	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				// react expects a unique key on every surrounding element that is returned
				<div className="collection-item" key={todo.id}>
					<span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
				</div>
			)
		})
	) : (
		<p className='center'>All Done!</p>
	) 

	return (
		<div className="todos collection">
		{todoList}
		</div>
	)
}

export default Todos;