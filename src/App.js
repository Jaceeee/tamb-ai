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
let setState;

class App extends Component {    
  constructor() {
    super();
    this.state = {      
      locationList: [],
      currentLocation: { lat: 10.3231372, lng: 123.8988388 },
      places: [],
      users: [],
      ratings: [],
      comments: []
    }
  }

  changeDisplayState(newState) {
    this.setState({
      ...this.state,
      displayState: newState
    });
  }

  changeCurrentMapLocation(newLocation) {        
    let newLoc = {lat: newLocation.latitude, lng: newLocation.longitude};
    this.setState({
      ...this.state,
      currentLocation: newLoc
    });
  }

  addComment(currentUserId, placeId, comment) {    
    let newComment = {
      commenter_id: currentUserId,
      context: comment,
      id: this.state.comments.length,
      place_id: placeId
    }

    const { comments } = this.state;

    comments.push(newComment);

    this.setState({...this.state, comments});
  }

  addRating(currentUserId, placeId, text, rate_value) {    
    let newRating = {
      id: this.state.ratings.length,
      place_id: placeId,
      rate_value: rate_value,
      rater_id: currentUserId,
      text: text
    }

    const { ratings } = this.state;

    ratings.push(newRating);
        
    setState({...this.state, ratings});
  }

  componentWillMount() {
    setState = this.setState;
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
              <Login changeCurrentMapLocation={this.changeCurrentMapLocation.bind(this)}
                     places = {this.state.places} 
                     currentLocation = {this.state.currentLocation}
                     users = {this.state.users} 
                     comments={this.state.comments}
                     ratings={this.state.ratings}
                     addComment={this.addComment.bind(this)}
                     addRating={this.addRating.bind(this)}/>
      </div>            
    );
  }
}

export default App;
