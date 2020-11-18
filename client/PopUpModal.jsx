import React, {useEffect, useState} from 'react';
// import Ratings from './Ratings';
import Modal from 'react-modal';
import {Button} from 'react-bootstrap';


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
            onClick={toggleShow}><small>X</small></div>
          <div className='left-side-modal'>
            <h1> 🧸 {props.ratings.average} ({props.reviews.length} reviews)</h1>
            {/* <Ratings /> */}
          </div>
          <div className='right-side-modal'>

          </div>
        </div>
      </Modal>
    </>
  );
};




export default PopUpModal;