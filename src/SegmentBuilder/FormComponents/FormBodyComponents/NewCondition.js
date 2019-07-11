import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class NewCondition extends Component {

  render (){

    return (
        <section className="form-body-group mb-gutter">
          <div className="form-section-header">
            <div>
              <p className="inline-block mr-right-72">New condition</p>
              <Form.Control as="select" name="product-search-criteria">
                <option value="category">Purchase history</option>
              </Form.Control>
            </div>
            <Button className="bg-jade border-none color-white">+ Add</Button>
          </div>
        </section>
    );
  }
}

export default NewCondition;
