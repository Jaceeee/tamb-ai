import React, { Component } from 'react';
import ReactStars from 'react-stars';
import '../stylesheets/RatingReview.css';

export default class RatingReview extends Component {
  render() {
    const { ratings, place_id, users } = this.props;

    let primaryRating;    

    for(let i = 0; i < ratings.length; i++) {      
      if(ratings[i].place_id === place_id) 
        primaryRating = ratings[i];
    }    

    let mainUser = (primaryRating !== undefined) ? users[primaryRating.rater_id] : null;
        
    if(primaryRating !== undefined)
      return (
        <div className="ReviewsList">
          <div className="ReviewsContainer">
            <ReactStars value={primaryRating.rating_value} edit={false} size={18}/>
            <div className="Reviewer">by {(primaryRating !== undefined) 
                                                          ? mainUser.first_name + " " + mainUser.last_name
                                                          : "user data is loading..."}</div>
            <div className="ReviewContent">
              <p>{primaryRating.text}</p> 
            </div>
          </div>
        </div>
      );

    return (
      <div className="ReviewsList">
        <div className="ReviewsContainer">          
        </div>
      </div>
    );
  }
}
