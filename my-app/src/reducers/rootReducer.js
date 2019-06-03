const initState = {
	todos: []
}

// give default value to state for first time run
const rootReducer = (state = initState, action) => {
	return state;
}

export default rootReducer;