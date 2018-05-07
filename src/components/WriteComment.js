import React, { Component } from 'react';

class WriteComment extends Component {

	writeComment (event) {
		const { content } = this.refs;
		if(this.props.currentPlace.placeName != "") {			
			this.props.addComment(content.toString());
		}		
		event.preventDefault();			
	}

	render() {
		return(
			<div>
				<div>
					<h3>{this.props.currentPlace.placeName}</h3>
				</div>
				<br />				
				<form onSubmit={this.writeComment.bind(this)}>
					<div>
						<p>Write a comment</p>
						<input type="text" ref="content" required="Please enter a comment"/>					
					</div>
					<div>
						<button type="submit">Write Comment</button>
					</div>
				</form>
			</div>
		);
	}
}

export default WriteComment;