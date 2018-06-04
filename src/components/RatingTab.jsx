import React, { Component } from 'react';
import { Button, Modal, ButtonToolbar } from 'react-bootstrap';
import ReactStars from 'react-stars';
import RatingModalBody from './RatingModalBody';
import RatingReview from './RatingReview';
import '../stylesheets/RatingTab.css';

export default class RatingTab extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = { 
          show: false, 
          average: 0, 
          rating: '',

          adjustedRating: 0,
          adjustedText: '',
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentWillMount() {
      const { ratings, placeId } = this.props;        

      let ratingValue = 0, count = 0;

      for (var i = 0; i < ratings.length; i++) {        
        if(ratings[i].place_id === placeId) {          
          ratingValue += ratings[i].rating_value;
          ++count;          
        }
      }

      if(count !== 0) {        

        this.setState({...this.state, average: Number(Math.round((ratingValue / count) + 'e2') + 'e-2')});        
      }
    }

    handleRatingUpdate(newRating) {
      this.setState({...this.state, adjustedRating: newRating});
    }  
    
    handleTextUpdate(newText) {
      this.setState({...this.state, adjustedText: newText});
    }

    addRating(event) {
      const { adjustedRating, adjustedText } = this.state;

      const valid = adjustedText !== '' && adjustedRating !== 0;

      const { currentUserId, placeId } = this.props;

      if(valid) {        
        this.props.addRating(currentUserId, placeId, adjustedText, adjustedRating, Date.now());      
      }

      event.preventDefault();
    }

    render() {      
      return (
          <div className="RatingContainer">
            <p><strong>{this.state.average}</strong> out of 5</p>
            <ReactStars value={this.state.average} edit={false} size={35} className="StarAverage"></ReactStars>              
            <Button bsStyle="primary" onClick={this.handleShow}>Rate Place</Button>              
            <Modal show={this.state.show} onHide={this.handleClose}>
              <form onSubmit={this.addRating.bind(this)} >
                <Modal.Header closeButton>
                  <Modal.Title>Place Name</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <RatingModalBody handleRatingUpdate={this.handleRatingUpdate.bind(this)} 
                                     handleTextUpdate={this.handleTextUpdate.bind(this)}/>
                </Modal.Body>
                <Modal.Footer>
                  <ButtonToolbar className="ModalButtons">
                    <Button bsStyle="primary" type="submit">Submit</Button>
                    <Button onClick={this.handleClose}>Cancel</Button>
                  </ButtonToolbar>
                </Modal.Footer>
              </form>
            </Modal>
            <h5>Reviews</h5>
            <RatingReview place_id={this.props.placeId}
                          users={this.props.users}
                          ratings={this.props.ratings}/>
          </div>
        )
    }
}