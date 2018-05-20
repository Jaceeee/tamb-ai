import React, { Component } from 'react';
import { 
  Link,
  withRouter,
} from 'react-router-dom';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

import { Row, Col, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const SignUpPage = ({ history, users }) =>
  <Row>
    <Col xs={3} />
    <Col xs={6}>
      <h1>SignUp</h1>
      <SignUpForm history={history} users={users}/>
    </Col>
  </Row>

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  username: '', 
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      firstName,
      lastName,
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(this.props.users.length, firstName, lastName, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE}));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error))
          })
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      firstName,
      lastName,
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      firstName === '' ||
      lastName === '' ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <FormGroup>

          <ControlLabel>First Name</ControlLabel>
          <FormControl
            value={firstName}
            onChange={event => this.setState(byPropKey('firstName', event.target.value))}
            type="text"
            placeholder="First Name"
          />
          <br />     

          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            value={lastName}
            onChange={event => this.setState(byPropKey('lastName', event.target.value))}
            type="text"
            placeholder="Last Name"
          />
          <br />     

          <ControlLabel>Username</ControlLabel>
          <FormControl
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Username"
          />
          <br />      

          <ControlLabel>Email Address</ControlLabel>          
          <FormControl
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email"
          />
          <br />

          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
          />
          <br />

          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm"
          />

          <br />
          <Button disabled={isInvalid} type="submit" bsStyle="success">
            Sign Up
          </Button>

          { error && <p>{error.message}</p> }
        </FormGroup>
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};