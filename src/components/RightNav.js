import React, { Component } from 'react';
<<<<<<< Updated upstream

<<<<<<< HEAD
=======
import Maps from '../containers/Maps';
>>>>>>> Stashed changes

class RightNav extends Component {
	render() {
		return(
            <div className="col-lg-2">
                <div className="panel-group">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            MAPS
                        </div>
                    </div>
                </div>
            
                <Maps />
            </div>
        )
=======
class RightNav extends Component {	
	render() {
		if(!this.props.loaded) {
			return <div>Loading... </div>
		}
		return(
			<div>			
			</div>
		)
>>>>>>> master
	}
}

export default RightNav;