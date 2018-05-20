import React, { Component } from 'react';
import FeedItem from '../containers/FeedItem';
import { Col } from 'react-bootstrap';
import FeedCarousel from './FeedCarousel';
import './Feed.css';

class Feed extends Component {	
	constructor() {
		super();
		this.state = {
			places: [{}],
			users: [{}],
			currentUser: {
				last_name: "Unk",
				first_name: "Unk"
			},
			loaded: false
		}		
	}	

	render () {			
		console.log(this.props);
		return (
			<Col sm={6}>
				<FeedCarousel/>
				<FeedsList places={this.props.places} // naa diri ang location
                    users={this.props.users} 
                    currentUser={this.state.currentUser.first_name !== "" ? `${this.state.currentUser.first_name} ${this.state.currentUser.last_name}` : "Unknown"}
                    changeCurrentMapLocation={this.props.changeCurrentMapLocation} />		   	
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
                name={feedItem.name} // I changed this
				contact={feedItem.contact_number} // I changed this
				type={feedItem.type}
				description={feedItem.description}
				imageUrl={feedItem.imageUrl} // why?
        		location = {feedItem.location}
        		key={feedItem.id.toString()}                 
                currentUser={props.currentUser}
                className={feedItem.type} 
                changeCurrentMapLocation={props.changeCurrentMapLocation}/>
		);
	});

	return (
		<ul className="FeedList">
			{feedItems}
		</ul>
	)
}

export default Feed;