import React, { Component } from 'react';
import ReactStars from 'react-stars';
import './RatingReview.css';

export default class RatingReview extends Component {
    render() {
        return (
            <div className="ReviewsList">
                <div className="ReviewsContainer">
                    <ReactStars value={3} edit={false} size={18}/>
                    <div className="Reviewer">by John Caesar P.</div>
                    <div className="ReviewContent">
                        <p>This is a sample review!</p>
                    </div>
                </div>
            </div>
        )
    }
}