import React from 'react'

const Navbar = () => {
	return (
		// Materialize css classes
		<nav className="nav-wrapper light-grey">
			<div className="container">
				<a className="brand-logo left">Wedding Todo</a>
				<ul className="right">
					<li><a href="/">Home</a></li>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/todo">Todo</a></li>

				</ul>
			</div>
		</nav>
	)
}

export default Navbar