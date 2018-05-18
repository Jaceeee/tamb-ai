import React, { Component } from 'react';
import { Grid, Navbar, Nav, FormControl, FormGroup, Button, Glyphicon } from 'react-bootstrap';
import './NavigationBar.css';

class Header extends Component {	
	render() {
		return (
			<Navbar inverse collapseOnSelect>
                <Grid fluid={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Tamb-ai
                        </Navbar.Brand>
                        <Navbar.Toggle />
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
                            <Button style={{position: "relative", top: "7px"}}
                            		className="btn btn-danger"
									onClick={this.props.changeDisplayState.bind(this, 0)}>
								Logout
							</Button>
                        </Nav>                       
                    </Navbar.Collapse>
                </Grid>
            </Navbar>
		)
	}
}

export default Header;