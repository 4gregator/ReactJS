import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login';
import Menu from './menu';

class App extends React.Component {
	render() {
		const menuItems = [
			{txt:'Главная', url:'/'},
			{txt:'О нас', url:'/about'},
			{txt:'Услуги', url:'/services'},
			{txt:'Контакты', url:'/contacts'}
		];

		return <div>
			<Menu title="Менюха" items={menuItems} />
			<Login />
		</div>
	}
}

ReactDOM.render(<App/>, document.querySelector("#root"));