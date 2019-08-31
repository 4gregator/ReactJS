import React from 'react';

export default class Menu extends React.Component {
	render() {
		const items = this.props.items.map((item, index) => {
			return <li key={index}><a href={item.url}>{item.txt}</a></li>
		});

		return <div>
			<h1>{this.props.title}</h1>
			<ul>{items}</ul>
		</div>
	}
}