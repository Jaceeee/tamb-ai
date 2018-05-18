import React, { Component } from 'react';
import FeedItem from '../containers/FeedItem';

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
		return (
			<div className="col-sm-7" style={{backgroundColor: "lavenderblush", position: "relative", top: "10px"}}>
				<FeedsList  places={this.props.places} // naa diri ang location
                    users={this.props.users} 
                    currentUser={this.state.currentUser.first_name !== "" ? `${this.state.currentUser.first_name} ${this.state.currentUser.last_name}` : "Unknown"}
                    changeCurrentMapLocation={this.props.changeCurrentMapLocation}/>	
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
        				location = {feedItem.location}
        				key={feedItem.id.toString()} 
                places={feed}                
                currentUser={props.currentUser}
                className={feedItem.type} 
                changeCurrentMapLocation={props.changeCurrentMapLocation}/>
		);
	});

	return (
		<ul>			
			{feedItems}
		</ul>
	)
}

export default Feed;