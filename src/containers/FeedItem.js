import React, {Component} from 'react';
import { Row, Jumbotron, Image, Tabs, Tab, Glyphicon } from 'react-bootstrap';
import Comment from '../components/Comment';
import '../stylesheets/MainPage.css';

class FeedItem extends Component {
	render() {					
		return (
			<li style={{listStyleType: "none"}}>				
				<Jumbotron>					
					<Row>
						<div>
							<a><h4>{this.props.name}</h4></a>
						</div>
						<Glyphicon glyph="map-marker"/>
					</Row>
					<Row>
						<div className="CaptionContainer">
							<p className="PostCaption">{this.props.description}</p>
						</div>
					</Row>
					<Row>
						<div className="PostImage">
							<Image src={this.props.imageUrl} responsive />
						</div>
					</Row>
					<br />
					<Row>
						<div className="FeedTabs">
							<Tabs defaultActiveKey={2} >
								<Tab eventKey={1} title="Description">
									<div className="DescriptionContainer">
										<p>{this.props.description}</p>
									</div>
								</Tab>
								<Tab eventKey={2} title="Comment">
									<Comment addComment={this.props.addComment}
									         currentUserId={this.props.currentUserId}
									         placeId={this.props.id}/>
								</Tab>
								<Tab eventKey={3} title="Rating">
								</Tab>
							</Tabs>
						</div>						
					</Row>
				</Jumbotron>
			</li>
		)
	}
}

export default FeedItem;