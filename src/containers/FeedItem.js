import React, {Component} from 'react';
import RatingTab from '../components/RatingTab';
import CommentTab from '../components/CommentTab';
import DetailsTab from '../components/DetailsTab';

import '../stylesheets/Feed.css';

import { Glyphicon, Jumbotron, Image, Tabs, Tab, Modal } from 'react-bootstrap';

class FeedItem extends Component {
	constructor(props) {
		super(props);
    	this.handleShow = this.handleShow.bind(this);
    	this.handleClose = this.handleClose.bind(this);
    	this.state = { show: false };
	}

	handleClose() {
	    this.setState({ show: false });
    }

    handleShow() {
	    this.setState({ show: true });
    }

    handleChangeLocation(event) {
    	console.log(event.target);
    	console.log(this.props.places);

    	let place;

    	for (var i = 0; i < this.props.places.length; i++) {
    		if(this.props.places[i].id === event.target.id) {
    			place = this.props.places[i];
    		}
    	}

    	this.props.changeCurrentMapLocation(place.location);
    	event.preventDefault();
    }

	render() {					
		return (
			<li style={{listStyleType: "none"}}>				
				<Jumbotron>										
					<div>
						<h4><a>{this.props.name}</a><Glyphicon id={this.props.id} onClick={this.handleChangeLocation.bind(this)} glyph="map-marker"/></h4>
					</div>
					<div className="CaptionContainer">
						<p className="PostCaption">{this.props.description}</p>
					</div>					
					<div className="PostImage">
						<Image src={this.props.imageUrl} responsive onClick={this.handleShow} />
						<Modal show={this.state.show} onHide={this.handleClose}>
							<Image src={this.props.imageUrl} responsive />
						</Modal>
					</div>					
					<div className="FeedTabs">
						<Tabs id="feed-tabs" defaultActiveKey={2} >
							<Tab eventKey={1} title="Rating">
								<RatingTab currentUserId={this.props.currentUserId}
										   addRating={this.props.addRating}
										   users={this.props.users}
								           placeId={this.props.id}
								           comments={this.props.comments}
								           ratings={this.props.ratings}/>
							</Tab>
							<Tab eventKey={2} title="Comment">
								<CommentTab addComment={this.props.addComment}
								            currentUserId={this.props.currentUserId}
								            users={this.props.users}
								            placeId={this.props.id}
								            comments={this.props.comments}/>
							</Tab>
							<Tab eventKey={3} title="Details">
							  <DetailsTab />
							</Tab>
						</Tabs>
					</div>											
				</Jumbotron>
			</li>
		)
	}
}

export default FeedItem;