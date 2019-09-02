import React, { Component } from 'react';

import Post from './Post';
//import WelcomeModal from './WelcomeModal';

export default class Blog extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const posts = this.props.data.map((item, index) => {
			return <Post key={index} title={item.title} post={item.postBody}/>
		});

		return (
			<div>
				{posts}
			</div>
		)
	}
}