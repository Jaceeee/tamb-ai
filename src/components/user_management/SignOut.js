import React from 'react';

import { auth } from '../../firebase';

import { Button } from 'react-bootstrap';

import '../../stylesheets/NavigationBar.css';

const SignOutButton = () =>
  <Button    
    onClick={auth.doSignOut}
    bsStyle="danger"
    className="HeaderLinks"
  >
    Sign Out
  </Button>

export default SignOutButton;