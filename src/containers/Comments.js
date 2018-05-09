import React, { Component } from 'react';

function CurrentCommentsList(props) {
	const comments = props.comments;
	const placeId = props.placeId;
	const currentComments = comments.map((comment) => {							
		if(placeId === comment.placeId) 
			return (<CurrentCommentItem value={comment.body}
											   commenterImageUrl={comment.userImageUrl}
											   commenterName={comment.commenterName}
											   userId={comment.userId}
											   placeId={comment.placeId}
											   key={comment.id.toString()} />
			);
		else {
			return null;
		}
	});

	return (
		<ul className="commentList">
			<li className="commentContainer">
				<div className="commenterImage">
					<img src="http://placekitten.com/50/50" alt={props.placeId}/>
				</div>
				<div className="commentText">
					<p className=""><span className="username">Juan Carlos Roldan</span>Some text</p><div className="date sub-text">on May 2, 2018</div>
				</div>
		    </li>
		    {currentComments}
	    </ul>
	);
}

function CurrentCommentItem(props) {	
	return(
		<li className="commentContainer">
			<div className="commenterImage">
				<img src={props.commenterImageUrl} alt={props.commenterName}/>
			</div>
			<div className="commentText">
				<p className=""><span className="username">{props.commenterName}</span>{props.value}</p><div className="date sub-text">on May 2, 2018</div>
			</div>
	    </li>
	);
}

class Comments extends Component {	
	componentWillMount() {
		this.setState({
			comments: [
				{
					id: 1,
					body: "This is such a wonderful place.",
					userImageUrl: "http://placekitten.com/50/50",
					commenterName: "John Caesar Patac",
					userId: 2,
					placeId: 1
				},
				{
					id: 2,
					body: "This is such a wonderful place.",
					userImageUrl: "http://placekitten.com/50/50",
					commenterName: "Juan Carlos Roldan",
					userId: 1,
					placeId: 3
				}
			]
		});
	}

	addComment(e) {
		const { commentBody } = this.refs;
		const newId = this.state.comments.length + 1;				
		const commenterName="Juan Carlos Roldan";
		const userId = 1;		
		let comments = this.state.comments; 
		if(commentBody.value !== ""){
			let newComment = {
				id: newId,
				body: commentBody.value,
				userImageUrl: "http://placekitten.com/50/50",
				commenterName: commenterName,
				userId: userId,
				placeId: commentBody.id
			};			
			
			comments.push(newComment);
		}


		this.setState({
			comments: comments
		});

		e.preventDefault();
	}

	render() {		
		return (
			<div id={"comment"+this.props.placeId} className="tab-pane fade">
				<CurrentCommentsList placeId={this.props.placeId}									 
									 comments={this.state.comments}
									 />
				<form className="form-inline commentForm">
					<div className="input-group">
						<input ref="commentBody" type="text" id={this.props.placeId} placeholder="Write a comment..." className="form-control commentBox" />
						<div className="input-group-btn">
							<button type="submit" onClick={this.addComment.bind(this)} className="btn btn-default sendBtn">
								<i className="glyphicon glyphicon-send"></i>
							</button>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default Comments;