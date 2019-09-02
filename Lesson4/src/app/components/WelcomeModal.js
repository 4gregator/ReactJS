import React, { Component } from 'react';

export default class WelcomeModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true
		}
	}

	render() {
		let modal;

		if (this.state.display) {
			modal = <div id="modal">
				<p>Привет, я модальное окно :)</p>
				<button onClick={() => {
					this.setState({ display: false});
				}}>Закрой меня!</button>
			</div>;
		}

		return <div>
			{modal}
		</div>
	}
}