import React, { Component } from 'react';
import DefineSegment from './DefineSegment';
import ProductsPurchased from './ProductsPurchased';
import TechnologyUsed from './TechnologyUsed';
import NewCondition from './NewCondition';


class FormBody extends Component {

  constructor(props) {
    super(props);

    this.handleClickOnEnter = this.handleClickOnEnter.bind(this);
  }

  handleClickOnEnter(e) {
    if(e.key === 'Enter') {

      this.props.addSearchTerm(e.target.id,e.target.value);
      e.target.value = '';
    }
  }

  render (){

    let props = this.props;

    return (
      <div className="form-body">
        <DefineSegment {...props} />
        <ProductsPurchased {...props} handleClickOnEnter={this.handleClickOnEnter} />
        <TechnologyUsed {...props} handleClickOnEnter={this.handleClickOnEnter} />
        <NewCondition {...props} />
        <div className="flex-end text-sm">
          <a href="#" className="color-dark-gray">Show source code</a>
        </div>
      </div>
    );
  }
}

export default FormBody;
