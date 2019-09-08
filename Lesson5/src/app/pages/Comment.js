import React, { Component } from 'react';
import axios from 'axios';

import CommentUnit from '../components/Comment';

export default class Comment extends Component {
	constructor(props) {
		super(props);
		this.state = {
			comment: null
		};
	}

	render() {
		return (
			<div>
				{this.state.comment ? <CommentUnit {...this.state.comment} /> : null}
			</div>
		);
	}

	componentDidMount() {
		axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`).then(response => {
			this.setState({comment: response.data})
		})
	}
}