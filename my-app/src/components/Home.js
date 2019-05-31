// convert functional to class component to use lifecycle hooks
import React, { Component } from 'react';
import axios from 'axios'

class Home extends Component {
	state = {
		post: [ ]
	}
	// we get a promise to which we can attach a then method when promise is fulfilled
	componentDidMount() {
		axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
			// grab data and output to page by adding to post array
			this.setState({
				post: res.data.slice(0,10)
			})
		})
	}

	render() {
		// grab post property from state
		const { post } = this.state
		const postList = post.length ? (
			post.map(post => {
				return (
					<div className="post card" key={post.id}>
						<div className="card-content">
							<span className="card-title">{ post.title }</span>
							<p>{ post.body }</p>
						</div>
					</div>
				)
			})
		) : (
			<div className="center">No Todos yet</div>
		)
		return (
			<div className="container">
				<h4 className="center">Home</h4>
				<p>{ postList }</p>
			</div>
		)
	}
}

export default Home