import React, { Component } from 'react';

function CurrentCommentsList(props) {	
	const currentComments = props.comments.forEach((comment) => {	
		return <CurrentCommentItem value={comment.body}/>
	});

	return (
		<div>{currentComments}</div>
	);
}

function CurrentCommentItem(props) {
	return(
		<p>{props.value}</p>
	);
}

const comment = (props) => {
	return (<div>{props.comment.body}</div>)
}

class Comment extends Component {
	render() {
		return (
			<div>
				<h1>Comments</h1>
				<CurrentCommentsList comments={this.props.comments}/>
			</div>
		)
	}
}

export default Comment;