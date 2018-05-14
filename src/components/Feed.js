import React, { Component } from 'react';
import FeedItem from '../containers/FeedItem';

class Feed extends Component {	
	constructor() {
		super();
		this.state = {
			places: [{
				id: 0
			}],
			users: [{}],
			currentUser: {
				last_name: "Unk",
				first_name: "Unk"
			}
		}
	}
	
	componentWillMount() {
		this.setState({...this.state, places: this.props.places, users: this.props.users});
	}

	render () {			
		return (
			<div className="col-sm-7" style={{backgroundColor: "lavenderblush", position: "relative", top: "10px"}}>
				<FeedsList  places={this.state.places} // naa diri ang location
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
        location = {feedItem.location}
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