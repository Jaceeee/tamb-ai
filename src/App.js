import React, { Component } from 'react';
import Login from './components/user_management/Login';
import Header from './components/Header';
import LeftNav from './components/LeftNav';
import RightNav from './components/RightNav';
import Feed from './components/Feed';
import { firebase } from './firebase';
import { Grid, Row } from 'react-bootstrap';
import './App.css';

const base = firebase.base;

class App extends Component {    
  constructor() {
    super();
    this.state = {
      displayState: 0,
      locationList: [],
      currentLocation: { lat: -1, lng: -1 },
      places: [],
      users: []
    }
  }

  changeDisplayState(newState) {
    this.setState({
      ...this.state,
      displayState: newState
    });
  }

  changeCurrentMapLocation(newLocation) {        
    this.setState({
      ...this.state,
      currentLocation: newLocation
    });
  }

  addComment(currentUser, placeId, comment) {
    console.log(currentUser);
    console.log(placeId);
    console.log(comment);
  }

  componentWillMount() {
    this.usersRef = base.syncState('users', {
      context: this,
      state: 'users'
    });
    this.placesRef = base.syncState('places', {
    	context: this,
    	state: 'places'
    });
    this.commentsRef = base.syncState('comments', {
    	context: this,
    	state: 'comments'
    });
    this.ratingsRef = base.syncState('ratings', {
    	context: this,
    	state: 'ratings'
    });
  }
  
  componentWillUnmount() {
    base.removeBinding(this.usersRef);
    base.removeBinding(this.placesRef);
    base.removeBinding(this.commentsRef);
    base.removeBinding(this.ratingsRef);
  }

  render() {            
    return (  
      <div>
        <LogSwitcher displayState={this.state.displayState}
                     changeDisplayState={this.changeDisplayState.bind(this)}
                     changeCurrentMapLocation={this.changeCurrentMapLocation.bind(this)}
                     places = {this.state.places} 
                     currentLocation = {this.state.currentLocation}
                     users = {this.state.users} 
                     addComment={this.addComment}/>                        
      </div>            
    );
  }
}

const LogSwitcher = (props) => {
  switch(props.displayState) {
    case 0:
      return  (
        <Login changeDisplayState={props.changeDisplayState}
               places={props.places}
               users={props.users}
               changeCurrentMapLocation={props.changeCurrentMapLocation}
               currentLocation={props.currentLocation}
               addComment={props.addComment}/>
      )
    case 1: 
    default:
      return (
        <div>
          <Header changeDisplayState={props.changeDisplayState}/>                    
          <Grid fluid={true}>
            <Row className="show-grid">
              <LeftNav />
              <Feed places = {props.places} 
                    users = {props.users}                 
                    changeCurrentMapLocation = {props.changeCurrentMapLocation}
                    addComment={props.addComment}/>
              <RightNav currentLocation = {props.currentLocation}/> 
            </Row>
          </Grid>
        </div>
      )
  }  
}
export default App;
