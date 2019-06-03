const initState = {
	todos: [
		{ content: 'photographer', id: 3},
    { content: 'videographer', id: 4}
	]
}

// give default value to state for first time run
const rootReducer = (state = initState, action) => {
	console.log('this is the action in the root reduce:', action);
	if (action.type === 'DELETE_POST') {
		// filter is a nondestructive method
		let newTodos = state.todos.filter(todo => {
			// if todo id = id that comes from the action
			return action.id != todo.id
		});
		// return new object with new array
		return {
			// spread current state and then override with new state
			...state,
			todos: newTodos
		}
	}
	return state;
}

export default rootReducer;