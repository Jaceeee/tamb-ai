import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ReactStars from 'react-stars';


const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
}); 

export default class RatingModal extends Component {    
    constructor() {
        super();

        this.state = {
            rating: 0,
            text: ''
        }
    }
    ratingChanged(newRating) {
        this.props.handleRatingUpdate(newRating);        
        this.setState({...this.state, rating: newRating});
    }

    textChanged(event) {
        this.props.handleTextUpdate(event.target.value);
        this.setState(byPropKey("text", event.target.value))
    }

    render() {        
        return(
            <div>
                <h4>Rate Place:</h4>
                <ReactStars onChange={this.ratingChanged.bind(this)} half={false} size={40} ref="stars" value={this.state.rating}/>                
                    <FormGroup controlId="formControlsTextArea">
                        <ControlLabel>Comments:</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Add comment..." ref="text" 
                                     onChange={this.textChanged.bind(this) }/>
                    </FormGroup>                
            </div>
        )
    }
}