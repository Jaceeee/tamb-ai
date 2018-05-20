import React, {Component} from 'react';
import RatingTab from '../components/RatingTab';
import CommentTab from '../components/CommentTab';
import DetailsTab from '../components/DetailsTab';

import Comment from '../components/Comment';
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
    	const id = event.target.id;

    	let place;

    	for (var i = 0; i < this.props.places.length; i++) {
    		if(this.props.places[i].id == id) {
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
						<Tabs defaultActiveKey={2} >
							<Tab eventKey={1} title="Rating">
								<RatingTab />
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