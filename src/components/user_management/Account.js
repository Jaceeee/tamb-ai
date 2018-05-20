import React, { Component } from 'react';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

import { withRouter } from 'react-router-dom';

import { firebase } from '../../firebase';

import * as routes from '../../constants/routes';

const authCondition = (authUser) => !!authUser;

class AccountPage extends Component {

	componentDidMount() {
		firebase.auth.onAuthStateChanged(authUser => {
			if(!authCondition(authUser)) {
				this.props.history.push(routes.SIGN_IN);
			}
		})
	}

	render() {
		return(
			<div>
			    <h1>Account: {this.props.authUser ? this.props.authUser.email : ""}</h1>
			    <PasswordForgetForm />
			    <PasswordChangeForm />
			</div>    
		)
	}	
}      
  

export default withRouter(AccountPage);