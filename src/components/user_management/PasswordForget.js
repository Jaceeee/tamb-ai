import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';

import { Grid, Row, Col, Button, FormControl, FormGroup, ControlLabel } from 'react-bootstrap';

const PasswordForgetPage = () =>
  <Row>
    <Col xs={3} />
    <Col xs={6}>
      <h1>RESET PASSWORD</h1>
      <PasswordForgetForm />
    </Col>
  </Row>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (      
      <form onSubmit={this.onSubmit}>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            value={this.state.email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
          <br />
          <Button disabled={isInvalid} type="submit" bsStyle="danger">
            Reset My Password
          </Button>

          { error && <p>{error.message}</p> }
        </FormGroup>
      </form>      
    );
  }
}

const PasswordForgetLink = () =>
  <p>
    <Link to="/pw-forget">Forgot Password?</Link>
  </p>

export default PasswordForgetPage;

export {
  PasswordForgetForm,
  PasswordForgetLink,
};