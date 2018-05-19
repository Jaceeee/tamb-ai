import React, { Component } from 'react';
import '../stylesheets/MainPage.css';

class RightNav extends Component {	
	render() {		
		if(!this.props.loaded) {
			return (
				<div className="col-lg-2">
					<Maps />
				</div>
				// <div> ...Loaded</div>
			)
		}
		return(
			<div>			
			</div>
		)
	}
}


export default RightNav;