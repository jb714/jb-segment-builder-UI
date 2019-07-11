import React, {  Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

class SegmentChartModal extends Component {

render() {
  const {
    showModal,
    handleClose
  } = this.props;

  return(
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Title>Your Segment Chart</Modal.Title>
      <Modal.Body>Chart placeholder</Modal.Body>
      <Button className="bg-charcoal color-white border-gray" onClick={handleClose}>Close</Button>
    </Modal>
  );
  }
}

export default SegmentChartModal;
