import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

import { Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const SignInPage = ({ history }) =>
  <Row>
    <Col xs={3}></Col>
    <Col xs={6}>
      <h1>LOGIN</h1>
      <SignInForm history={history} />
      <PasswordForgetLink />
      <SignUpLink />
    </Col>  
  </Row>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {    
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            placeholder="Enter text"
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
          />          
          <br />

          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
          />          
          <br />

          <Button disabled={isInvalid} type="submit" bsStyle="success">
            Sign In
          </Button>
          { error && <p>{error.message}</p> }
          
        </FormGroup>
      </form>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};