import React, {Component} from 'react';
import RatingTab from '../components/RatingTab';
import CommentTab from '../components/CommentTab';
import DetailsTab from '../components/DetailsTab';

import Comment from '../components/Comment';
import '../stylesheets/MainPage.css';

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

	render() {					
		return (
			<li style={{listStyleType: "none"}}>				
				<Jumbotron>										
					<div>
						<a><h4>{this.props.name}</h4></a>
					</div>
					<Glyphicon glyph="map-marker" onClick={this.props.changeCurrentMapLocation(this.props.places[this.props.id])}/>					
					<div className="CaptionContainer">
						<p className="PostCaption">{this.props.description}</p>
					</div>					
					<div className="PostImage">
						<Image src={this.props.imageUrl} responsive />
						<Modal show={this.state.show} onHide={this.handleClose}>
							<Image src={this.props.imageUrl} responsive />
						</Modal>
					</div>					
					<div className="FeedTabs">
						<Tabs defaultActiveKey={2} >
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