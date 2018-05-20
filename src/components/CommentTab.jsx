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
        const { comments, users, placeId } = this.props;

        let filteredCommentsByPlace = comments.filter((commentItem) => {
          return commentItem.place_id === placeId;
        });

        console.log(filteredCommentsByPlace);

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
        
        console.log("Comments list");
        console.log(commentsList);

        const commentItems = () => (
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
          </ul>
        );

        console.log("Comment Items")
        console.log(commentItems);
        return (
          <div className="CommentTabContainer">
            <ul className="CommentList">
              <li className="CommentContainer">
                <div className="CommenterImage">
                  <Image src="http://placekitten.com/50/50" circle responsive />
                </div>
                <div className="CommentText">
                  <p><a className="CommenterName">John Caesar Patac</a>Sample Comment</p>
                  <div className="DateSubText">on May 9, 2018</div>
                </div>
              </li>            
            </ul>
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

const CommentItems = () => {

}

const CommentItem = (props) => {
  <li className="CommentContainer">
    <div className="CommenterImage">
      <Image src="http://placekitten.com/50/50" circle responsive />
    </div>
    <div className="CommentText">
      <p><a className="CommenterName">{`${props.user.first_name} ${props.user.last_name}`}</a>{props.context}</p>
      <div className="DateSubText">on May 9, 2018</div>
    </div>
  </li>
}