import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Blog from './app/components/Blog';
import WelcomeModal from './app/components/WelcomeModal';
import './app/styles/style.css';

const POSTS = [
	{title: 'POST#1', postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat asperiores quos expedita voluptatibus, odio atque animi repellat quis neque impedit saepe consequuntur dolores rem dolore. Tenetur ab maiores magnam provident.'},
	{title: 'POST#2', postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eveniet aliquam nihil expedita dolore quasi nulla aspernatur debitis rerum tenetur aperiam itaque ipsum ea, laboriosam quae, illo natus reprehenderit adipisci!'},
	{title: 'POST#3', postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime voluptate quas iste non aspernatur, eum, nam aliquid eveniet sint iusto accusamus eligendi, possimus ea atque minus, perspiciatis reiciendis fugit quia.'},
	{title: 'POST#4', postBody: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore earum quod sapiente repellendus natus accusantium ullam, suscipit architecto eaque cupiditate, accusamus quo incidunt, laudantium, sunt iusto voluptatum officia porro in?'}
];

class Rendering extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modal: false
		}
	}

	render() {
		let modal = this.state.modal? <WelcomeModal/> : null;

		return (
			<div>
				<Blog data={POSTS}/>
				{modal}
			</div>
		)
	}

	componentDidMount() {
		this.setState({ modal: true});
	}
}

ReactDOM.render(<Rendering/>,document.getElementById('root'));