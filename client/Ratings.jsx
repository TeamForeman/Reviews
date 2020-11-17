import React from 'react';

const Ratings = (props) => {

  return (
    <div className='rating-box'>
      <h3>🧸 {props.rate.average}  ({props.numOfReviews} reviews)</h3>
      <div>
        <span className='rating'>Cleanliness:</span><span className='rating'>{props.rate.cleanliness}</span>
        <span className='rating'>Accuracy:</span><span className='rating'>{props.rate.accuracy}</span>
      </div>
      <div>
        <span className='rating'>Communication:</span><span className='rating'>{props.rate.communication}</span>
        <span className='rating'>Location:</span><span className='rating'>{props.rate.location}</span>
      </div>
      <div>
        <span className='rating'>Check-in:</span><span className='rating'>{props.rate.checkin}</span>
        <span className='rating'>Value:</span><span className='rating'>{props.rate.value}</span>
      </div>
    </div>
  );

};

export default Ratings;