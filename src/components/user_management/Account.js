import React, { Component } from 'react';

import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';

import { withRouter } from 'react-router-dom';

import Navigation from './Navigation';

import { firebase } from '../../firebase';

import FileUploader from 'react-firebase-file-uploader';

import * as routes from '../../constants/routes';

const authCondition = (authUser) => !!authUser;

class AccountPage extends Component {
	constructor() {
		super();

		this.state = {
			username: '',
			avatar: '',
			isUploading: ''
		}
	}

	componentDidMount() {
		firebase.auth.onAuthStateChanged(authUser => {
			if(!authCondition(authUser)) {
				this.props.history.push(routes.SIGN_IN);
			}
		});


	}

	render() {
		return(
			<div>
				<Navigation/>
				<div>
					<br /><br />
					<h1>Account: {this.props.authUser ? this.props.authUser.email : ""}</h1>
					<PasswordForgetForm />
					<PasswordChangeForm />
				</div>
			</div>    
		)
	}	
}      
  

export default withRouter(AccountPage);