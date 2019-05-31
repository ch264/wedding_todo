import React from 'react';

import Color from '../higherOrderComp/Color'

const About = () => {
	return (
		<div className="container">
			<h4 className="center">About</h4>
			<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi, unde. Ea dolorum ipsam, nisi minus molestiae perferendis rerum soluta quibusdam quasi doloremque reprehenderit illum, provident magni velit saepe laboriosam eos.</p>
		</div>
	)
}

export default Color(About)