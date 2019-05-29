// UI component, gets state and props from root 
import React from 'react';

// pass props in as parameter
const Cake = (props) => {
	// destructuring props to variables
	const { cake } = props;
	// // cycle through cakes array and map to new cakeList array
	// const cakeList = cake.map(cake => {
	
	// 	return (
	// 		<div className="Cake" key={ cake.id}>
	// 			<div>Baker</div>
	// 			<div>Budget</div>
	// 			<div>Cover: { cake.name }</div>
	// 		</div>
	// 	)
	// })

	const cakeList = cake.map(cake => {
		return cake.id >1 ? (
				<div className="Cake" key={ cake.id}>
					<div>Baker</div>
					<div>Budget</div>
					<div>Cover: { cake.name }</div>
	 			</div>
		) : null
	});
	return (
	<div className="cake-list">
		{ cakeList }
	</div>
	);
}

export default Cake;