import React, { Component } from 'react';

export default class Post extends Component {
	render() {
		return (
			<div className="post">
				<h2>{this.props.title}</h2>
				<p>{this.props.post}</p>
			</div>
		)
	}
}