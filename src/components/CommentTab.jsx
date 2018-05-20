import React, { Component } from 'react';
import { Image, FormGroup, FormControl } from 'react-bootstrap';
import '../stylesheets/CommentTab.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
}); 

export default class CommentTab extends Component {
    constructor(props) {
      super(props);

      this.state = {
        comment: ''
      }    
    }

    addComment(event) {    
      const { comment } = this.state;

      const valid = comment !== '';

      const { currentUserId, placeId } = this.props;

      this.refs.comment.value = '';

      if(valid) {
        this.props.addComment(currentUserId, placeId, comment);      
      }

      event.preventDefault();
    }

    render() {                      
        return (
          <div className="CommentTabContainer">
            <CommentItems comments={this.props.comments}
                          users={this.props.users}
                          placeId={this.props.placeId}/>
            <form onSubmit={this.addComment.bind(this)}>
              <FormGroup>
                <FormControl ref="comment"
                             type="text" 
                             placeholder="Write a comment..." 
                             onChange={event => this.setState(byPropKey("comment", event.target.value))} 
                />
              </FormGroup>
            </form>
          </div>
        )
    }
}

const CommentItems = (props) => {
  const { comments, users, placeId } = props;
    
  let filteredCommentsByPlace = comments.filter((commentItem) => {
    return commentItem.place_id === placeId;
  });  

  const commentsList = filteredCommentsByPlace.map((commentItem) => {
    let user;

    for (var i = 0; i < users.length; i++) {
      if(users[i].id === commentItem.commenter_id) {
        user = users[i];
      }
    }


    return (<CommentItem context={commentItem.context}
                        user={user} />);
  });  

  return (
    <ul className="CommentList">
      <li className="CommentContainer">
        <div className="CommenterImage">
          <Image src="http://placekitten.com/50/50" circle responsive />
        </div>
        <div className="CommentText">
          <p><a className="CommenterName">"John Caesar Patac"</a>Sample Comment</p>
          <div className="DateSubText">on May 9, 2018</div>
        </div>
      </li>
      {commentsList}
    </ul>
  );  
}

const CommentItem = (props) => (
  <li className="CommentContainer">
    <div className="CommenterImage">
      <Image src="http://placekitten.com/50/50" circle responsive />
    </div>
    <div className="CommentText">
      <p><a className="CommenterName">{`${props.user.first_name} ${props.user.last_name}`}</a>{props.context}</p>
      <div className="DateSubText">on May 9, 2018</div>
    </div>
  </li>
)