import React, { Component } from 'react';
import FeedItem from '../containers/FeedItem';
import { Col } from 'react-bootstrap';

import FeedCarousel from './FeedCarousel';
import '../stylesheets/Feed.css';

class Feed extends Component {	
	constructor() {
		super();
		this.state = {
			places: [{}],
			users: [{}],
			currentUser: {},
			loaded: false
		}		
	}	

	render () {							
		let currentUser = { id: -1 } ;

		for (var i = this.props.users.length - 1; i >= 0; i--) {			
			if(this.props.users[i].email === this.props.currentUser.email) {
				currentUser = this.props.users[i];
			}
		}
				
		return (
			<Col sm={6}>
				<FeedCarousel/>
				<FeedsList places={this.props.places} // naa diri ang location
                           users={this.props.users} 
                           comments={this.props.comments}
                           currentUserId={currentUser.id}
                           changeCurrentMapLocation={this.props.changeCurrentMapLocation} 
                           addComment={this.props.addComment}/>		   	
		  	</Col>
    	)
	}
}

function FeedsList(props) {	
	const feed = props.places;	
	const feedItems = feed.map((feedItem) => {    
		return (
			<FeedItem id={feedItem.id}
                      places={feed}
                      users={props.users}
                      comments={props.comments}
                      name={feedItem.name} 
		        	  contact={feedItem.contactNumber}
				      type={feedItem.type}
				      description={feedItem.description}
				      imageUrl={feedItem.imageUrl}
        		      location = {feedItem.location}
        		      key={feedItem.id.toString()}                 
                      currentUserId={props.currentUserId}
                 	  className={feedItem.type} 
                  	  changeCurrentMapLocation={props.changeCurrentMapLocation}
                	  addComment={props.addComment}/>
		);
	});

	return (
		<ul className="FeedList">
			{feedItems}
		</ul>
	)
}

export default Feed;