import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import SegmentChartModal from './SegmentChartModal';


class FormHeader extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showModal: false
    };
  }

  handleShow() {
    this.setState({showModal: true});
  }

  handleClose() {
    this.setState({showModal: false});
  }


  render (){

    const {
      userData,
      formData
    } = this.props;

    return (
        <div className="form-header">
          <div className="form-title-section">
            <input type="text" placeholder={formData.formTitle} className="form-title-input color-white"/>
            <div className="text-sm user-sig">Created by {userData.user.userFirst} {userData.user.userLast}</div>
          </div>
          <div className="form-header-buttons">
            <Button className="bg-transparent border-white">Exit</Button>
            <Button className="bg-transparent border-white" onClick={this.handleShow}>Preview</Button>
            <Button className="bg-white border-none color-dark-gray">Save Changes</Button>
          </div>
          <SegmentChartModal showModal={this.state.showModal} handleClose={this.handleClose}/>
        </div>
    );
  }
}

export default FormHeader;
