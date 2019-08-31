import React from 'react';

class Login extends React.Component {
	render() {
		return <div>
			<form name="login" action="POST">
				<input name="name" type="text" placeholder="Enter Your Name"/>
				<input name="password" type="password" placeholder="password"/>
				<input type="submit" value="Login/Войти"/>
			</form>
		</div>
	}
}

export default Login;