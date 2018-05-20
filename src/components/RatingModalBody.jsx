import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import ReactStars from 'react-stars';

export default class RatingModal extends Component {
    ratingChanged = (newRating) => {console.log(newRating)}

    render() {
        return(
            <div>
                <h4>Rate Place:</h4>
                <ReactStars onChange={this.ratingChanged} half={false} size={40}/>
                <form>
                    <FormGroup controlId="formControlsTextArea">
                        <ControlLabel>Comments:</ControlLabel>
                        <FormControl componentClass="textarea" placeholder="Add comment..." />
                    </FormGroup>
                </form>
            </div>
        )
    }
}