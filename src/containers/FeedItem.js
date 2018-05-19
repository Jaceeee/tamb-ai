import React, {Component} from 'react';
import { Jumbotron, Image, Tabs, Tab } from 'react-bootstrap';
import Comment from '../components/Comment';

class FeedItem extends Component {
	render() {	
		return (
			<li style={{listStyleType: "none"}}>
				<Jumbotron>	
					<div>
						<a><h4>{this.props.name}</h4></a>
					</div>
					<div className="CaptionContainer">
						<p className="PostCaption">{this.props.description}</p>
					</div>
					<div className="PostImage">
						<Image src={this.props.imageUrl} responsive />
					</div>
					<div className="FeedTabs">
						<Tabs defaultActiveKey={2} >
							<Tab eventKey={1} title="Description">
								<div className="DescriptionContainer">
									<p>{this.props.description}</p>
								</div>
							</Tab>
							<Tab eventKey={2} title="Comment">
								<Comment />
							</Tab>
							<Tab eventKey={3} title="Rating">
							</Tab>
						</Tabs>
					</div>						
				</Jumbotron>
			</li>
		)
	}
}

export default FeedItem;