import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import Ratings from './Ratings.jsx';
import AllReviews from './AllReviews.jsx';


Modal.setAppElement(document.getElementById('app'));

const PopUpModal = (props) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);



  return (
    <>
      <button className='btn-see-all-reviews' onClick={toggleShow}>See all {props.reviews.length} reviews</button>

      <Modal
        className='modal-for-reviews'
        isOpen={show} onHide={toggleShow}>
        <p hidden>test</p>
        <div className='reviews-module-box'>
          <div className='x-button-reviews'
            onClick={toggleShow}><small>X</small>
          </div>

          <div className='modal-inside-flex'>

            <div className='left-side-modal-reviews'>
              <Ratings
                ratings={props.ratings}
                numOfReviews={props.reviews.length}
                percentageBar={props.percentageBar}
              />
            </div>

            <div className='right-side-modal-reviews'>
              <div className='inner-right-reviews'>
                <div className='input-form-reviews'>
                  <label>
                    🔍
                    <input
                      className='input-search-reviews'
                      type='text'
                      onChange={props.handleChange}
                      onKeyDown={props.search}
                    ></input>
                  </label>
                </div>
                <br></br><br></br>
                <AllReviews
                  reviews={props.reviews}
                  readMore={props.readMore}
                />
              </div>
            </div>

          </div>
        </div>
      </Modal>
    </>
  );
};




export default PopUpModal;