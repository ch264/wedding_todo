import React from 'react';

// add router information to props passed in
const Contact = (props) => {
	setTimeout(() => {
		props.history.push('./about')
	}, 2000)
	return (
		<div className="container">
			<h4 className="center">Contact</h4>
			<p>Welcome to the Wedding Planning todo app. This app can help you organise your big day</p>
		</div>
	)
}

export default Contact

