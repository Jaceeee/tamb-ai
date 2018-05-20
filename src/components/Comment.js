import React, { Component } from 'react';
import { Image, FormGroup, FormControl } from 'react-bootstrap';
import '../stylesheets/CommentPage.css';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
}); 

export default class CommentPage extends Component {

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
    const { comment } = this.state;        
    return (
      <div className="CommentPageContainer">
        <ul className="CommentList">
          <li className="CommentContainer">
            <div className="CommenterImage">
              <Image src="http://placekitten.com/50/50" circle responsive/>
            </div>
            <div className="CommentText">
              <p><span className="CommenterName">John Caesar Patac</span>Hello! This is a sample comment.</p><div className="DateSubText">on May 9, 2018</div>
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