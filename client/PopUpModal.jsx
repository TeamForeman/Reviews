import React, {useEffect, useState} from 'react';
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
        <h1>We made it</h1>
        <Button onClick={toggleShow}>close</Button>
      </Modal>
    </>
  );
};




export default PopUpModal;