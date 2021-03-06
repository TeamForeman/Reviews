import React, {useEffect, useState} from 'react';
import useDidMount from '@rooks/use-did-mount';
import Highlighter from "react-highlight-words";

const SingleReview = (props) => {

  //TOGGLES THE VIEW OF THE READMORE BUTTON AND SECOND HALF OF REVIEW BODY
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  //REMOVES READMORE BUTTON IN POPUP AND SHORT PARAGRAPHS
  useDidMount( () => {
    if (props.review.reviewBody.length < 100) {
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
      {/* THE REVIEW BODY FOR THE MAIN PAGE */}
      {!props.isModal &&<p className='review-paragraph padding-right-review'>
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
      </p>}
      {/* THE REVIEW BODY FOR THE POPUP MODAL */}
      {props.isModal && <Highlighter
        className='review-paragraph'
        highlightClassName='review-paragraph'
        searchWords={[props.wordsToHighlight]}
        textToHighlight={props.review.reviewBody}
      />}
    </div>
  );
};

export default SingleReview;