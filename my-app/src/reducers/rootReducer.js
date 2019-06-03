const initState = {
	todos: [
		{ content: 'photographer', id: 3},
    { content: 'videographer', id: 4}
	]
}

// give default value to state for first time run
const rootReducer = (state = initState, action) => {
	return state;
}

export default rootReducer;