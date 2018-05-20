import React, { Component } from 'react';
import { Grid, Navbar, Nav, FormControl, FormGroup, Button, Glyphicon, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import '../stylesheets/Header.css';

class Header extends Component {	
	render() {
		return (
			<Navbar collapseOnSelect fixedTop>
                <Grid fluid={true}>
                    {/*<Navbar.Header pullRight>*/}
                        {/*<Navbar.Brand>*/}
                            {/*Tamb-ai*/}
                        {/*</Navbar.Brand>*/}
                        {/*<Navbar.Toggle />*/}
                    {/*</Navbar.Header>*/}
                    <Navbar.Collapse>
                        <Nav>
                            <NavItem className="Item"><Glyphicon glyph="home" className="ControlItem" />Home</NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem className="Logout" onClick={this.props.changeDisplayState.bind(this, 0)}><Glyphicon glyph="log-out" className="ControlItem"/>Logout</NavItem>
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
		)
	}
}

export default Header;