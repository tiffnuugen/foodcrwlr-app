import React, { Component } from 'react';

import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {
  render() {
    return (
      <div className='reviews container'>
        <ReviewForm />
        <Divider section horizontal>
          <Header as='h2'>REVIEWS</Header>
        </Divider>
      </div>
    );
  }
}

export default ReviewsContainer;
