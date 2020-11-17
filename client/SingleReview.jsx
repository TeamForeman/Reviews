import React from 'react';

const SingleReview = (props) => {
  return (
    <div className='review'>
      <span className='profile-picture'>
        <a href={props.review.profilePic}>
          <img alt='profile-pic' src={props.review.profilePic} width='60px' height='60px'></img>
        </a>
      </span>
      <span className='name-date'>
        <p>{props.review.name}</p>
        <p>{props.review.date}</p>
      </span>
      <p className='review-body'>{props.review.reviewBody}</p>
    </div>

  );

};

export default SingleReview;