import React from 'react';

const Ratings = (props) => {

  return (
    <div className='rating-box'>
      <h3>* 4.0 (2 reviews)</h3>
      <div>
        <span className='rating'>Cleanliness:</span><span className='rating'>3.2</span>
        <span className='rating'>Accuracy:</span><span className='rating'>4.5</span>
      </div>
      <div>
        <span className='rating'>Communication:</span><span className='rating'>4.8</span>
        <span className='rating'>Location:</span><span className='rating'>5.0</span>
      </div>
      <div>
        <span className='rating'>Check-in:</span><span className='rating'>5.0</span>
        <span className='rating'>Value:</span><span className='rating'>4.5</span>
      </div>
    </div>
  );

};

export default Ratings;