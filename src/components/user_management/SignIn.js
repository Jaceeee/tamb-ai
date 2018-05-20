import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

import { Row, Col, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

import '../../stylesheets/SignIn.css';

const SignInPage = ({ history }) =>
  <Row>
    <Col sm={12} className="LandingPage">
      <div className="SignContainer">
        <div className="ContainerTitle">
          <h3>LOGIN</h3>
          <p>Enter email and password to login</p>
          <Glyphicon glyph="lock" />
        </div>
        <div className="FormContainer">
          <SignInForm history={history} />
        </div>
        <div className="SignFooter">
          <PasswordForgetLink />
          <SignUpLink />
        </div>
      </div>
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
          {/*<ControlLabel>Email</ControlLabel>*/}
          <FormControl type="text" placeholder="Enter email" value={email} onChange={event => this.setState(byPropKey('email', event.target.value))} className="LoginForm"/>
          {/*<br />*/}

          {/*<ControlLabel>Password</ControlLabel>*/}
          <FormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={event => this.setState(byPropKey('password', event.target.value))}
            className="LoginForm"
          />          
          <br />

          <Button disabled={isInvalid} type="submit" bsStyle="success" className="LoginButton">
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