import React, { Component } from 'react';
import { Col, PanelGroup, Panel, Button, Glyphicon, ListGroup, ListGroupItem } from 'react-bootstrap';
import './MainPage.css';

class LeftNav extends Component {
  constructor() {
    super();

    this.state = {
      open: false
    };
  }
	render() {
		return(
			<Col sm={2}>
        <PanelGroup>
          <Panel expanded={this.state.open}>
            <Panel.Heading>
              <Button onClick={() => this.setState({open: !this.state.open })} >
                CATEGORIES
                <Glyphicon glyph="menu-down" />
              </Button>
            </Panel.Heading>
            <Panel.Collapse>
              <ListGroup>
                <ListGroupItem href="/" to="/">Adventure</ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem href="/" to="/">Food</ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem href="/" to="/">Romance</ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem href="/" to="/">Leisure</ListGroupItem>
              </ListGroup>
              <ListGroup>
                <ListGroupItem href="/" to="/">Gaming</ListGroupItem>
              </ListGroup>
            </Panel.Collapse>
          </Panel>
        </PanelGroup>
      </Col>
		)
	}
}

export default LeftNav;