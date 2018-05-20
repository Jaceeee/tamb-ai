import React, { Component } from 'react';
import Maps from '../containers/Maps';
import { Col } from 'react-bootstrap';
import '../stylesheets/RightNav.css';

class RightNav extends Component {	
	render() {		
		return(
			<Col sm={4}>
				<div className="RightPanel">
					<Maps focus={this.props.currentLocation}/>
				</div>
			</Col>
		)
	}
}


export default RightNav;