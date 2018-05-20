import React from 'react';
import { Link } from 'react-router-dom';

import SignOutButton from './SignOut';
import * as routes from '../../constants/routes';

import '../../stylesheets/NavigationBar.css';

import { Nav, Navbar, Grid, ButtonGroup, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

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
    <Link to={routes.LANDING}><Button bsStyle="info" className="HeaderLinks">Landing</Button></Link>
    <Link to={routes.HOME}><Button bsStyle="primary" className="HeaderLinks">Home</Button></Link>
    <Link to={routes.ACCOUNT}><Button bsStyle="warning" className="HeaderLinks">Account</Button></Link>
    <SignOutButton className="HeaderLinks"/>
  </ButtonGroup>

const NavigationNonAuth = () =>
  <ButtonGroup>
    <Link to={routes.LANDING}><Button bsStyle="default" className="HeaderLinks">Landing</Button></Link>
    <Link to={routes.SIGN_IN}><Button bsStyle="warning" className="HeaderLinks">Sign In</Button></Link>
  </ButtonGroup>

export default Navigation;