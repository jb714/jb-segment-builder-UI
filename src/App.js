import React, { Component } from 'react';
import './scss/App.scss';
import './scss/styleguide.scss';
import SiteHeader from './SegmentBuilder/SiteHeader';
import SiteNavigation from './SegmentBuilder/SiteNavigation';
import FormContainer from './SegmentBuilder/FormComponents/FormContainer';

export const userData = {
  user : {
    userFirst: 'Justin',
    userLast: 'Bell'
  },
  company: {
    companyName: 'JB Fashion'
  }
};

class App extends Component {

  constructor(){
    super();
    this.state = {
      userData: userData
    }
  }

  render (){

    return (
      <div className="App container-fluid px-0">
        <header className="row">
          <SiteHeader userData={this.state.userData} />
        </header>
        <main className="row no-gutters main-content">
          <SiteNavigation />
          <FormContainer userData={this.state.userData} />
        </main>
      </div>
    );
  }

}

export default App;
