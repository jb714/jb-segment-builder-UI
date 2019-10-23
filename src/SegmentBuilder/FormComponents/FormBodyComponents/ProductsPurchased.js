import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import uuid from 'uuid';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class ProductsPurchased extends Component {

  render (){

    const {
      formData,
      handleClickOnEnter,
      handleDateChange
    } = this.props;

    let productSearchTerms = formData.searchTerms.productSearchTerms;
    let productArrayLength = productSearchTerms.length;

    return (
        <section className="form-body-group mb-gutter">
          <div className="form-section-header">
            <p>Products purchased <span className="color-gray">- What products have they interacted with?</span></p>
            <Button className="bg-white border-gray color-gray">Delete</Button>
          </div>
          <Form.Control as="select" name="product-search-criteria">
            <option value="category">Category</option>
          </Form.Control>
          <Form.Control as="select" name="filter-phrase">
            <option value="is-one-of">is one of</option>
            <option value="contains">contains</option>
          </Form.Control>
          <div className="form-control pseudo-input wide">
            {productSearchTerms.map((term)=> (
              <div className="pseudo-input-badge" key={uuid.v4()}>{term}</div>
            ))}
          </div>
          {productArrayLength === 5 ? '' :
            <Form.Control id="product" type="text" className="mr-top-24" placeholder="+Product" onKeyDown={handleClickOnEnter}/>}

          <hr />

          <div className="form-section-header">
            <p>Time of purchase <span className="color-gray">- When did this purchase take place?</span></p>
            <Button className="bg-white border-gray color-gray">Delete</Button>
          </div>
          <Form.Control as="select" name="product-search-criteria">
            <option value="category">Product purchased</option>
          </Form.Control>
          <Form.Control as="select" name="filter-phrase">
            <option value="is-one-of">on</option>
          </Form.Control>
          <DatePicker
            className="form-control"
            selected={formData.startDate}
            onChange={handleDateChange}
            />
        </section>
    );
  }
}

export default ProductsPurchased;
