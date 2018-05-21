import React, { Component } from 'react';
import Maps from '../containers/Maps';
import { Col } from 'react-bootstrap';
import '../stylesheets/RightNav.css';

class RightNav extends Component {	
	render() {		
		return(
			<Col sm={4}>
				<div className="RightPanel">
					<Maps focus={this.props.currentLocation}
					      originLng={this.props.originLng}
					      originLat={this.props.originLat}/>
				</div>
			</Col>
		)
	}
}


export default RightNav;