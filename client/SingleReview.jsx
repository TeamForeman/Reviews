import React, {useEffect, useState} from 'react';
import useDidMount from '@rooks/use-did-mount'

const SingleReview = (props) => {

  //TOGGLES THE VIEW OF THE READMORE BUTTON AND SECOND HALF OF REVIEW BODY
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  //REMOVES READMORE BUTTON IN POPUP AND SHORT PARAGRAPHS
  useDidMount( () => {
    if (props.isModal || props.review.reviewBody.length < 100) {
      toggleShow();
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