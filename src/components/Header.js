import React, { Component } from 'react';
import { Grid, Navbar, Nav, FormControl, FormGroup, Button, Glyphicon, NavDropdown, MenuItem, NavItem } from 'react-bootstrap';
import './Header.css';

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
                            <NavItem><Glyphicon glyph="home"/></NavItem>
                        </Nav>
                        <Nav pullRight>
                            <NavItem onClick={this.props.changeDisplayState.bind(this, 0)}><Glyphicon glyph="log-out"/></NavItem>
                        </Nav>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" placeholder="Search for Places"/>
                            </FormGroup>{' '}
                            <Button type="submit">
                                <Glyphicon glyph="search" />
                            </Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Grid>
            </Navbar>
		)
	}
}

export default Header;