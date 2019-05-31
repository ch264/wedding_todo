// higher order components are functions that wrap othter components and gives them superpowers

import React from  'react'

const Color = (WrapComponent) => {

	const colors = ['green', 'light-blue', 'goldenrod', 'white', 'silver', 'light-purple']
	const randomColor = colors[Math.floor(Math.random() * 5)]
	// concatenate randomColor with -text to create Materialize class
	const className = randomColor +' -text';

	return (props) => {
		return (
			<div className={className}>
				<WrapComponent {...props}/>
			</div>
		)
	}
}

export default Color