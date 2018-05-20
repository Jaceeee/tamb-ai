import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import './RightNav.css';

class RightNav extends Component {	
	render() {
		console.log("Hello")
		console.log(this.props);
		console.log("Hello")
		if(!this.props.loaded) {
			return (
				<Col sm={4}>
					<div className="RightPanel">Loading... </div>
				</Col>
			)
		}
		return(
			<div>			
			</div>
		)
	}
}

export default RightNav;