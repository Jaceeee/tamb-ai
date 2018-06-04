import React, { Component } from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';
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
    return (
      <div className="CommentPageContainer">
        <ul className="CommentList">          
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