import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';

// import SignOutButton from './SignOut';
import * as routes from '../../constants/routes';

import '../../stylesheets/NavigationBar.css';

import { Nav, Navbar, NavItem, Grid, Button, FormGroup, FormControl, Glyphicon } from 'react-bootstrap';

const Navigation = ({ authUser }) =>
    <Navbar collapseOnSelect fixedTop>
        <Grid fluid={true}>
            <Navbar.Header pullRight>
                <Navbar.Brand>
                    {/*Tamb-ai*/}
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem><Link to={routes.ACCOUNT}><Glyphicon glyph="cog" className="SettingGlyph"/>Setting</Link></NavItem>
                    <NavItem className="Item"><Link to={routes.HOME}><Glyphicon glyph="home" className="ControlItem" />Home</Link></NavItem>
                    <NavItem><Glyphicon glyph="envelope" className="ControlItem"/>Notifications</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem onClick={auth.doSignOut} className="Logout"><Glyphicon glyph="log-out" className="ControlItem" />Logout</NavItem>
                </Nav>
                <Navbar.Form pullRight className="NavbarForm">
                    <FormGroup>
                        <FormControl type="text" placeholder="Search for Places"/>
                        <Button bsStyle="link">
                            <Glyphicon glyph="search" />
                        </Button>
                    </FormGroup>{' '}
                </Navbar.Form>
            </Navbar.Collapse>
        </Grid>
    </Navbar>

// { authUser
//     ? <NavigationAuth />
//     : <NavigationNonAuth />
// }
// onClick={this.props.changeDisplayState.bind(this, 0)}

// const NavigationAuth = () =>
//   <ButtonGroup>
//     <Link to={routes.LANDING}><Button bsStyle="info" className="HeaderLinks">Landing</Button></Link>
//     <Link to={routes.HOME}><Button bsStyle="primary" className="HeaderLinks">Home</Button></Link>
//     <Link to={routes.ACCOUNT}><Button bsStyle="warning" className="HeaderLinks">Account</Button></Link>
//     <SignOutButton className="HeaderLinks"/>
//   </ButtonGroup>
//
// const NavigationNonAuth = () =>
//   <ButtonGroup>
//     <Link to={routes.LANDING}><Button bsStyle="default" className="HeaderLinks">Landing</Button></Link>
//     <Link to={routes.SIGN_IN}><Button bsStyle="warning" className="HeaderLinks">Sign In</Button></Link>
//   </ButtonGroup>

export default Navigation;