import React, { Component, Fragment } from 'react';

// <div className="site-nav horizontal-nav sm-up-hidden">
// </div>

class SiteNavigation extends Component {
  render (){
    return (
      <Fragment>
        <div className="col sidebar-container d-none d-lg-block">
          <div className="site-nav sidebar-nav">
            <div className="sidebar-item">Overviews</div>
            <div className="sidebar-item">Experiences</div>
            <div className="sidebar-item">Segments</div>
            <div className="sidebar-item">Insights</div>
            <div className="sidebar-item">Visitor Cloud</div>
          </div>
        </div>

        <div className="col-xs-12 mobile-nav-container d-xs-block d-lg-none">
          <div className="site-nav mobile-nav">
            <div className="mobile-nav-item">Overviews</div>
            <div className="mobile-nav-item">Experiences</div>
            <div className="mobile-nav-item">Segments</div>
            <div className="mobile-nav-item">Insights</div>
            <div className="mobile-nav-item">Visitor Cloud</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default SiteNavigation;
