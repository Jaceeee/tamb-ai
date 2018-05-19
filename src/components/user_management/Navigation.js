import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../../constants/routes';

import '../../stylesheets/NavigationBar.css';

import { Nav, Navbar, Grid, Row, Col, ButtonGroup, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

const Navigation = ({ authUser }) =>
  <Navbar inverse collapseOnSelect>
    <Grid fluid={true}>
      <Navbar.Header>                    
        <Navbar.Brand>
          Tamb-AI
        </Navbar.Brand>                  
      </Navbar.Header>
      <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
              <FormControl type="text" placeholder="Search for Places"/>
          </FormGroup>{' '}
          <Button type="submit">
              <Glyphicon glyph="search" />
          </Button>          
        </Navbar.Form>
        <Nav pullRight>
          { authUser
              ? <NavigationAuth />
              : <NavigationNonAuth />
          }      
        </Nav>
      </Navbar.Collapse>
    </Grid>
  </Navbar>

const NavigationAuth = () =>
  <ButtonGroup>
    <Button bsStyle="info" className="HeaderLinks"><Link to={routes.LANDING}>Landing</Link></Button>
    <Button bsStyle="primary" className="HeaderLinks"><Link to={routes.HOME}>Home</Link></Button>
    <Button bsStyle="warning" className="HeaderLinks"><Link to={routes.ACCOUNT}>Account</Link></Button>    
    <SignOutButton className="HeaderLinks"/>
  </ButtonGroup>

const NavigationNonAuth = () =>
  <ButtonGroup>
    <Button bsStyle="default" className="HeaderLinks"><Link to={routes.LANDING}>Landing</Link></Button>
    <Button bsStyle="warning" className="HeaderLinks"><Link to={routes.SIGN_IN}>Sign In</Link></Button>
  </ButtonGroup>

export default Navigation;