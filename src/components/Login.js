import React, { Component } from 'react';
import { firebase } from '../firebase';

const { base } = firebase;

class Login extends Component {
	componentWillMount() {
		this.usersRefs = base.syncState('users', {
			context: this,
			state: 'users'
		});
	}

	componentWillUnmount() {
		base.removeBinding(this.usersRefs);
	}

	login(e) {
		const { username, password } = this.refs;

		const users = this.state.users;

		if(username.value !== "" && password !== "") {
			for(let i = 0; i < users.length; i++) {
				if(users[i].userName === username.value && users[i].password === password.value) {
					this.props.changeDisplayState(1);
				}
			}
		}
		else {
			alert("invalid values for username or password");
		}
		e.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={this.login.bind(this)}>
					<h1>Username</h1>
					<input ref="username" type="text" />
					<h1>Password</h1>
					<input ref="password" type="password" />
					<br />
					<button className="btn btn-primary">Login</button>
				</form>
			</div>
		)
	}
}


export default Login;