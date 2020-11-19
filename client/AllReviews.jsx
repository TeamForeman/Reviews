import React from 'react';
import SingleReview from './SingleReview.jsx';

const AllReviews = (props) => {

  return (
    <div className='reviews-box'>
      {props.reviews.map(review => {
        return (
          <SingleReview
            key={review.reviews_id}
            review={review}
          />);
      })}
    </div>
  );

};

export default AllReviews;