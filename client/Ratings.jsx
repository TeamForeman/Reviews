import React from 'react';

const Ratings = (props) => {

  return (
    <div>
      <h3 className='average'>🧸 {props.rate.average}  ({props.numOfReviews} reviews)</h3>
      <div className='ratings-box'>
        <div className='rating'>Cleanliness:</div>
        <div className='rating'>{props.rate.cleanliness}</div>
        <div className='rating'>Accuracy:</div>
        <div className='rating'>{props.rate.accuracy}</div>
        <div className='rating'>Communication:</div>
        <div className='rating'>{props.rate.communication}</div>
        <div className='rating'>Location:</div>
        <div className='rating'>{props.rate.location}</div>
        <div className='rating'>Check-in:</div>
        <div className='rating'>{props.rate.checkin}</div>
        <div className='rating'>Value:</div>
        <div className='rating'>{props.rate.value}</div>
      </div>
    </div>
  );

};

export default Ratings;