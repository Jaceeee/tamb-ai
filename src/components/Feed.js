import React, { Component } from 'react';
import FeedItem from '../containers/FeedItem';
import {firebase} from '../firebase';

const base = firebase.base;

class Feed extends Component {	
	constructor() {
		super();
		this.state = {
			places: [],
			users: [],
			currentUser: {
				last_name: "Unk",
				first_name: "Unk"
			}
		}
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

  componentWillUnount() {
    base.removeBinding(this.usersRef);
    base.removeBinding(this.placesRef);
    base.removeBinding(this.commentsRef);
    base.removeBinding(this.ratingsRef);
  }

	render () {			
		return (
			<div className="col-sm-7" style={{backgroundColor: "lavenderblush", position: "relative", top: "10px"}}>
				<FeedsList  places={this.state.places}
                    users={this.state.users} 
                    currentUser={this.state.currentUser.first_name !== "" ? `${this.state.currentUser.first_name} ${this.state.currentUser.last_name}` : "Unknown"}/>	
	   	</div>
    )
	}
}

function FeedsList(props) {
	const feed = props.places;
	const feedItems = feed.map((feedItem) => {    
		return (
			<FeedItem id={feedItem.id}
                places={feed}
                name={feedItem.placeName} 
				contact={feedItem.contactNumber}
				type={feedItem.type}
				description={feedItem.description}
				imageUrl={feedItem.imageUrl}
				key={feedItem.id.toString()} 
                places={feed}
                currentUser={props.currentUser}
                className={feedItem.type} />
		);
	});

	return (
		<ul>			
			{feedItems}
		</ul>
	)
}

export default Feed;