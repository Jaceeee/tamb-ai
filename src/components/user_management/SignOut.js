import React from 'react';

import { auth } from '../../firebase';

import { Button, Glyphicon } from 'react-bootstrap';

import '../../stylesheets/NavigationBar.css';

const SignOutButton = () =>
  <Glyphicon    
    onClick={auth.doSignOut}
    glyph="log-out"
    className="ControlItem HeaderLinks"
  >
    Sign Out
  </Glyphicon>

export default SignOutButton;