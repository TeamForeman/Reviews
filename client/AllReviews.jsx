import React from 'react';

const AllReviews = (props) => {

  return (
    <div>
      <div className='review'>
        <span className='profile-picture'>
          <a href='https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3851312.jpeg'>
            <img alt='profile-pic' src='https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3851312.jpeg' width='80px' height='80px'></img>
          </a>
        </span>
        <span className='name-date'>
          <p>name</p>
          <p>date</p>
        </span>
        <p className='review-body'>some words about how good it was</p>
      </div>
      <div className='review'>
        <span className='profile-picture'>
          <a href='https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3775540.jpeg'>
            <img alt='profile-pic' src='https://beartnt-profile-photos.s3.us-east-2.amazonaws.com/beartnt+profile+photos/pexels-photo-3775540.jpeg' width='80px' height='80px'></img>
          </a>
        </span>
        <span className='name-date'>
          <p>name</p>
          <p>date</p>
        </span>
        <p className='review-body'>some words about how good it was</p>
      </div>
    </div>
  );

};

export default AllReviews;