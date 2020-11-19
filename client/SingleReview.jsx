import React from 'react';

const SingleReview = (props) => {
  return (
    <div className='individual-review-box'>
      <div className='review-pic-name-date-box'>
        <span className='profile-picture'>
          <a href={props.review.profilePic}>
            <img alt='profile-pic' src={props.review.profilePic} width='60px' height='60px'></img>
          </a>
        </span>
        <span className='review-name-date-box'>
          <p>{props.review.name}</p>
          <p>{props.review.date}</p>
        </span>
      </div>
      <p className='review-paragraph'>{props.review.reviewBody}</p>
    </div>

  );

};

export default SingleReview;