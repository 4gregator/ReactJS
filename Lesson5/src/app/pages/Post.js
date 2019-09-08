import React, { Component } from 'react';
import axios from 'axios';

import PostUnit from '../components/Post';

export default class Post extends Component {
	constructor(props) {
		super(props);
		this.state = {
			post: null
		};
	}

	render() {
		return (
			<div>
				{this.state.post ? <PostUnit {...this.state.post} /> : null}
			</div>
		);
	}

	componentDidMount() {
		axios.get(`http://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`).then(response => {
			this.setState({post: response.data})
		})
	}
}