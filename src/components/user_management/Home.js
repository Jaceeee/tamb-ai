import React, {Component} from 'react';

import LeftNav from '../LeftNav';
import RightNav from '../RightNav';
import Feed from '../Feed';

import { Row } from 'react-bootstrap';

import { firebase } from '../../firebase';

import * as routes from '../../constants/routes';

import { withRouter } from 'react-router-dom';

const authCondition = (authUser) => !!authUser;

class Home extends Component {

	componentDidMount() {

		firebase.auth.onAuthStateChanged(authUser => {
			if(!authCondition(authUser)) {
				this.props.history.push(routes.SIGN_IN);
			}
		});
	}

	render(){
		if(this.props.authUser){
			return(
				<Row>            
					<LeftNav />
					<Feed places={this.props.places} 
					  users={this.props.users}                 
					  changeCurrentMapLocation={this.props.changeCurrentMapLocation}/>
					<RightNav currentLocation={this.props.currentLocation}/> 
				</Row>
			)			
		}

		else return null;
	}
}



export default withRouter(Home);