import React, { Component } from 'react';

import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div className='reviews container'>
        <Reviews />
      </div>
    );
  }
}

export default ReviewsContainer;
