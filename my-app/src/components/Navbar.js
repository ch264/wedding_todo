import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
	return (
		// Materialize css classes
		<nav className="nav-wrapper light-grey">
			<div className="container">
				<a className="brand-logo left">Wedding Todo</a>
				<ul className="right">
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/about">About</navLink></li>
					<li><NavLink to="/contact">Contact</NavLink></li>
					<li><NavLink to="/todo">Todo</NavLink></li>

				</ul>
			</div>
		</nav>
	)
}

export default Navbar