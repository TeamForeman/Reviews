import React from 'react';

const IndividualRating = (props) => {

  return (
    <div className='individual-ratings-box'>
      <div className='rating-label'>{props.rating.name}:
      </div>
      <div className='score-bar'>
        <div className='base-layer'>
          <div style={props.percentageBar(props.rating.score)}></div>
        </div>
        <div></div>
      </div>

      <div className='score'>
        <small>&nbsp; &nbsp;{props.rating.score}</small>
        <p hidden>test</p>
      </div>
    </div>
  );

};

export default IndividualRating;