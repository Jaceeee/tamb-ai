import React, { Component } from 'react';
import Maps from '../containers/Maps';
import { Col } from 'react-bootstrap';
import '../stylesheets/RightNav.css';

class RightNav extends Component {	
	render() {		
		if(!this.props.loaded) {
			return (
				<Col sm={4}>
					<Maps />
				</Col>
			)
		}
		return(
			<div>			
				<Maps />
			</div>
		)
	}
}


export default RightNav;