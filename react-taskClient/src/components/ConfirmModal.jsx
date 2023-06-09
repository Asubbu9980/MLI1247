import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ConfirmModal = (props) => {

  const [show, setShow] = useState(true);
  const handleClose = (() => props.onClose(true)); 
  const handleDismiss = (() => props.onClose(false));

  return (
    <>
      <Modal show={show} onHide={handleDismiss} className="d-flex justify-content-center align-items-center">
        <Modal.Header closeButton>
          <Modal.Title>Confirmation Required</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this product</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDismiss}>
            No
          </Button>
          <Button variant="success" onClick={handleClose}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmModal;
