import React, { Component } from 'react';
import '../stylesheets/MainPage.css';

class RightNav extends Component {	
	render() {		
		if(!this.props.loaded) {
			return <div>Loading... </div>
		}
		return(
			<div>			
			</div>
		)
	}
}

export default RightNav;