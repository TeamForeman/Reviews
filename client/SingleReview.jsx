import React, {useEffect, useState} from 'react';
import useDidMount from '@rooks/use-did-mount'

const SingleReview = (props) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  var imageStyle = {
    background: `url(${props.review.profilePic})`,
    borderRadius: '50%',
    width: '60px',
    height: '60px'
  };

  console.log(props.isModal);
  useDidMount( () => {
    if (props.isModal) {
      setShow(true);
    }
  });

  return (
    <div className='single-review-box'>
      <div className='review-pic-name-date-box'>
        <span className='profile-picture'>
          <p hidden>test</p>
          <img className='profile-picture-shape' alt='profile-pic' src={props.review.profilePic} width='60px' height='60px'></img>
        </span>
        <span className='review-name-date-box'>
          <p className='review-name'>{props.review.name}</p>
          <p className='review-date'>{props.review.date}</p>
        </span>
      </div>
      <p className='review-paragraph'>
        {props.readMore(props.review.reviewBody)[0]}
        {!show &&
          <span>...
            <span className="read-more-btn" onClick={toggleShow}>read more</span>
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