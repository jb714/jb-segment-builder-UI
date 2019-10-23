import React, { Component } from 'react';
import { Nav, Navbar } from 'react-bootstrap';


class SiteHeader extends Component {

  renderInitials() {

    const {
      userData
    } = this.props;

    return userData.user.userFirst[0] + userData.user.userLast[0];
  }

  render (){

    const {
      userData
    } = this.props;

    return (
        <header className="site-header">
          <div className="site-title color-dark-gray">Qubit.</div>
          <div className="account-nav">
            <div className="nav-item circular-badge bg-gray">
              <span className="badge-initials">{this.renderInitials()}</span>
            </div>
            <div className="nav-item color-dark-gray">
              <span>{userData.user.userFirst} {userData.user.userLast}</span>
            </div>
            <div className="nav-item">
              <input className="nav-searchbar bg-gray" type="text" placeholder={userData.company.companyName}></input>
            </div>
          </div>
        </header>
    );
  }
}

export default SiteHeader;
