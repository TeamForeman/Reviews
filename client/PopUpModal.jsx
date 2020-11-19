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
      <button onClick={toggleShow}>See all {props.reviews.length} reviews</button>

      <Modal
        className='modal'
        isOpen={show} onHide={toggleShow}>
        <p hidden>test</p>
        <div className='module-box'>
          <div className='x-button'
            onClick={toggleShow}><small>X</small>
          </div>

          <div className='modal-inside-flex'>

            <div className='left-side-modal'>
              <Ratings
                ratings={props.ratings}
                numOfReviews={props.reviews.length}
                percentageBar={props.percentageBar}
              />
            </div>

            <div className='right-side-modal'>
              <div className='inner-right'>
                <label></label>
                <input value='🔍  Search reviews'></input><br></br><br></br>
                <AllReviews
                  reviews={props.reviews}
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