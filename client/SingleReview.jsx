import React, {useEffect, useState} from 'react';

const SingleReview = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <div className='individual-review-box'>
      <div className='review-pic-name-date-box'>
        <span className='profile-picture'>
          <a href={props.review.profilePic}>
            <p hidden>test</p>
            <img className='profile-picture-shape' alt='profile-pic' src={props.review.profilePic} width='60px' height='60px'></img>
          </a>
        </span>
        <span className='review-name-date-box'>
          <p>{props.review.name}</p>
          <p>{props.review.date}</p>
        </span>
      </div>
      <p className='review-paragraph'>
        {props.readMore(props.review.reviewBody)[0]}
        {!show &&
          <span>...
            <span className="read-more" onClick={toggleShow}>read more</span>
          </span>
        }
        {show &&
          <span className="more">
            {props.readMore(props.review.reviewBody)[1]}
          </span>
        }
      </p>
    </div>

  );

};

export default SingleReview;