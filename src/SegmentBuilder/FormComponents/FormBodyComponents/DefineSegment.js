import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';

class DefineSegment extends Component {

  setSegmentUpperBound(){

    const {
      formData
    } = this.props;

    let productArrayLength = formData.searchTerms.productSearchTerms.length;
    let techArrayLength = formData.searchTerms.techSearchTerms.length;
    let combinedArrayLength = productArrayLength + techArrayLength;
    let upperBound;

    switch(combinedArrayLength){
      case 0:
      upperBound = 0;
      break;
      case 1:
      upperBound = 35;
      break;
      case 2:
      upperBound = (35 - (Math.floor(Math.random() * 8)));
      break;
      case 3:
      upperBound = (35 - (Math.floor(Math.random() * 16)));
      break;
      case 4:
      upperBound = (35 - (Math.floor(Math.random() * 24)));
      break;
      case 5:
      upperBound = (35 - (Math.floor(Math.random() * 31)));
      break;
      case 6:
      upperBound = (35 - (Math.floor(Math.random() * 34)));
      break;
      case 7:
      upperBound = (35 - (Math.floor(Math.random() * 36)));
      break;
      default:
      upperBound = 0;
    }

    if(upperBound < 0) {
      upperBound = 0;
    }

      return upperBound;
  }

  setSegmentLowerBound(upperBound){
    let lowerBound;

    if (upperBound === 0) {
      return '';
    }
    else {
      //If upperBound less than 11, return approximation tilde instead of showing range
      return lowerBound = upperBound < 11 ? '~' : upperBound - 10 + " - ";
    }
  }

  render () {

    let upperBound = this.setSegmentUpperBound();
    let lowerBound = this.setSegmentLowerBound(upperBound);

    return (
        <section className="flex-space-between mb-gutter">
          <div className="define-segment form-body-group mr-gutter">
            <p>Define a new Segment</p>
            <p>Add a Condition to define a segment. The more conditions you add the more specific your segment will be.</p>
          </div>
          <div className="segment-estimate form-body-group">
            <p>Estimated segment size</p>
            <p><span className="color-jade">{lowerBound}{upperBound}%</span> of your total traffic expected to join based on a sample of historical data</p>
            <ProgressBar now={upperBound} label />
          </div>
        </section>
    );
  }
}

export default DefineSegment;
