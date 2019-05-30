// UI component, gets state and props from root 
import React from 'react';
import './Cake.css'

// pass props in as parameter
const Cake = (props) => {
	// destructuring props to variables
	const { cake, deleteCake } = props;
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
		return cake.id > 1 ? (
				<div className="Cake" key={ cake.id}>
					<div>Baker</div>
					<div>Budget</div>
					<div>Cover: { cake.name }</div>
					{/* function call surrounding function fires only on click event */}
					<button onClick={ () => {deleteCake(cake.id)} }>Delete Cake</button>
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