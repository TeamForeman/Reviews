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
        <div className='module-box'>
          <div className='x-button'
            onClick={toggleShow}><small>X</small>
          </div>
          <div className='module-right-left'>
            <div className='modal-side'>
              <div className='left-side-modal'>
                <Ratings
                  ratings={props.ratings}
                  numOfReviews={props.reviews.length}
                  percentageBar={props.percentageBar}
                />
              </div>
            </div>
            <div className='modal-side'>
              <div className='right-side-modal'>
                <label>🔍</label>
                <input></input><br></br><br></br>
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