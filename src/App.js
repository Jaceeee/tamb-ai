import React, { Component } from 'react';
import { firebase } from './firebase';
import Login from './components/user_management/Login';

import './App.css';

const base = firebase.base;

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
    this.setState({
      ...this.state,
      currentLocation: {lat: newLocation.latitude, lng: newLocation.longitude}
    });    
  }

  addComment(currentUserId, placeId, comment, date_commented) {    
    let newComment = {
      commenter_id: currentUserId,
      context: comment,
      id: this.state.comments.length,
      place_id: placeId,
      date_published: date_commented
    }

    const { comments } = this.state;

    comments.push(newComment);

    this.setState({...this.state, comments});
  }

  addRating(currentUserId, placeId, text, rate_value, date_submitted) {    
    let newRating = {
      id: this.state.ratings.length,
      place_id: placeId,
      rating_value: rate_value,
      rater_id: currentUserId,
      text: text,
      date_published: date_submitted
    }

    const { ratings } = this.state;

    ratings.push(newRating);
            
    this.setState({...this.state, ratings});
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
