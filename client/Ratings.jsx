import React from 'react';
import IndividualRating from './IndividualRating.jsx';


const Ratings = (props) => {
  var arrOfRatings = [];
  for ( var key in props.ratings) {
    if (key !== 'ratings_id' && key !== 'average') {
      arrOfRatings.push({name: key, score: props.ratings[key]});
    }
  }

  return (
    <div>
      <h3 className='average'>🧸 {props.ratings.average}  ({props.numOfReviews} reviews)</h3>
      <div className='ratings-box'>
        {arrOfRatings.map(rating => {
          return (
            <IndividualRating rating={rating} percentageBar={props.percentageBar} />
          );
        })}
        {/* <div className='rating'>Cleanliness:</div>
        <div className='rating score-bar'>
          <div className='base-layer'>
            <div style={props.percentageBar(props.ratings.cleanliness)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.cleanliness}</small>
        </div>

        <div className='rating'>Accuracy:</div>

        <div className='rating'>
          <div className='base-layer score-bar'>
            <div style={props.percentageBar(props.ratings.accuracy)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.accuracy}</small>
        </div>

        <div className='rating'>Communication:</div>

        <div className='rating'>
          <div className='base-layer score-bar'>
            <div style={props.percentageBar(props.ratings.communication)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.communication}</small>
        </div>

        <div className='rating'>Location:</div>

        <div className='rating'>
          <div className='base-layer score-bar'>
            <div style={props.percentageBar(props.ratings.location)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.location}</small>
        </div>

        <div className='rating'>Check-in:</div>

        <div className='rating' >
          <div className='base-layer score-bar'>
            <div style={props.percentageBar(props.ratings.checkin)}></div>
          </div>
        </div>
        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.checkin}</small>
        </div>

        <div className='rating'>Value:</div>

        <div className='rating'>
          <div className='base-layer score-bar'>
            <div style={props.percentageBar(props.ratings.value)}></div>
          </div>
        </div>

        <div className='rating score'>
          <small>&nbsp; &nbsp;{props.ratings.value}</small>
        </div> */}

      </div>
    </div>
  );

};

export default Ratings;