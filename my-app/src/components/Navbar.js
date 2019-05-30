import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
	return (
		// Materialize css classes
		<nav className="nav-wrapper light-grey">
			<div className="container">
				<a className="brand-logo left">Wedding Todo</a>
				<ul className="right">
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/todo">Todo</Link></li>

				</ul>
			</div>
		</nav>
	)
}

export default Navbar