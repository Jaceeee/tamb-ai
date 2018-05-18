import React, { Component } from 'react';

class RightNav extends Component {	
	render() {
		console.log("Hello")
		console.log(this.props);
		console.log("Hello")
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