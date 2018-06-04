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
        this.props.addComment(currentUserId, placeId, comment, Date.now());      
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

const formatDate = (date) => {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + (d.getDate() + 1),
    year = '' + d.getFullYear();

    if(day < 2) {
      day = '0' + day;
    }

    if(month < 2) {
      month = '0' + month;      
    }
        
    return [month, day, year].join('-');
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


    return (<CommentItem key={commentItem.id}
                         context={commentItem.context}
                         date_published={commentItem.date_published}
                         user={user} />);
  });  

  return (
    <ul className="CommentList">      
      {commentsList}
    </ul>
  );  
}

const CommentItem = (props) => {
  const datePassed = new Date(props.date_published);          
  return (
    <li className="CommentContainer">
      <div className="CommenterImage">
        <Image src="http://placekitten.com/50/50" circle responsive />
      </div>
      <div className="CommentText">
        <p><a className="CommenterName">{`${props.user.first_name} ${props.user.last_name}`}</a>{props.context}</p>
        <div className="DateSubText">{formatDate(datePassed)}</div>
      </div>
    </li>
)}