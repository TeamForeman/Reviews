import React from 'react';

const Ratings = (props) => {

  var percentage = (score) => {
    var styles = {
      height: '10px',
      backgroundColor: 'black',
      borderRadius: '10px'
    };
    styles.width = (score / 5 * 100) + '%';
    console.log('here?', styles);
    return styles;
  };

  return (
    <div>
      <h3 className='average'>🧸 {props.rate.average}  ({props.numOfReviews} reviews)</h3>
      <div className='ratings-box'>
        <div className='rating'>Cleanliness:</div>

        <div className='rating'>
          <div className='base-layer'>
            <div style={percentage(props.rate.cleanliness)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.cleanliness}</small>
        </div>

        <div className='rating'>Accuracy:</div>

        <div className='rating'>
          <div className='base-layer'>
            <div style={percentage(props.rate.accuracy)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.accuracy}</small>
        </div>

        <div className='rating'>Communication:</div>

        <div className='rating'>
          <div className='base-layer'>
            <div style={percentage(props.rate.communication)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.communication}</small>
        </div>

        <div className='rating'>Location:</div>

        <div className='rating'>
          <div className='base-layer'>
            <div style={percentage(props.rate.location)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.location}</small>
        </div>

        <div className='rating'>Check-in:</div>

        <div className='rating' >
          <div className='base-layer'>
            <div style={percentage(props.rate.checkin)}></div>
          </div>
        </div>
        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.checkin}</small>
        </div>

        <div className='rating'>Value:</div>

        <div className='rating'>
          <div className='base-layer'>
            <div style={percentage(props.rate.value)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.rate.value}</small>
        </div>

      </div>
    </div>
  );

};

export default Ratings;