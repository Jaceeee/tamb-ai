import React, { Component } from 'react';
import Maps from '../containers/Maps';

class RightNav extends Component {	
	render() {
		// console.log("Yo");
		// console.log(this.props);
		// console.log("Yo");
		if(!this.props.loaded) {
			return (
				<div className="col-lg-2">
					<Maps location={this.props.currentLocation}/>
				</div>
			)
		}
		return(
			<div>			
			</div>
		)
	}
}


export default RightNav;