import React from 'react';
import ReactDOM from 'react-dom';
import {msg} from './index';

class App extends React.Component {
	render() {
		alert(msg);
		return <div>
			<h1>Первое приложение на React</h1>
			<p>Hello React</p>
		</div>
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));