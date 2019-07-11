import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import uuid from 'uuid';

class TechnologyUsed extends Component {

  render (){

    const {
      formData,
      handleClickOnEnter,
    } = this.props;

    let techSearchTerms = formData.searchTerms.techSearchTerms;
    let techArrayLength = techSearchTerms.length;

    return (
        <section className="form-body-group mb-gutter">
          <div className="form-section-header">
            <p>Technology <span className="color-gray">- Which device, browser or operating system are they using?</span></p>
            <Button className="bg-white border-gray color-gray">Delete</Button>
          </div>
          <Form.Control as="select" name="product-search-criteria">
            <option value="category">Device</option>
          </Form.Control>
          <Form.Control as="select" name="filter-phrase">
            <option value="is-one-of">is one of</option>
            <option value="contains">contains</option>
          </Form.Control>
          <div className="form-control pseudo-input wide">
            {techSearchTerms.map((term)=> (
              <div className="pseudo-input-badge" key={uuid.v4()}>{term}</div>
            ))}
          </div>
          {techArrayLength === 2 ? '' : <Form.Control id="tech" type="text" className="mr-top-24" placeholder="+More" onKeyDown={handleClickOnEnter}/> }
        </section>
    );
  }
}

export default TechnologyUsed;
