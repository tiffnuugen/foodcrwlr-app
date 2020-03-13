import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Icon, Rating } from 'semantic-ui-react';

import { addReview } from '../../actions/reviewActions';

class ReviewForm extends Component {
  state = {
    text: '',
    rating: 0
  };

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleRate = (e, { rating }) => {
    this.setState({
      rating
    });
  };

  handleSubmit = () => {
    const review = {
      // userId: this.props.userId,
      // restaurantId: this.props.restaurantId,
      text: this.state.text,
      rating: this.state.rating
    };
    this.props.addReview(review);
    this.setState({
      text: '',
      rating: 0
    });
  };

  render() {
    return (
      <Form className='review' onSubmit={this.handleSubmit}>
        <strong>Select a rating:</strong>{' '}
        <Rating
          clearable
          size='huge'
          rating={this.state.rating}
          maxRating={5}
          onRate={this.handleRate}
        />
        <TextArea
          name='text'
          placeholder='Write a review...'
          value={this.state.text}
          onChange={this.handleChange}
        />
        <Button type='submit' floated='right' basic color='teal'>
          <Icon name='add' />
          Add Review
        </Button>
      </Form>
    );
  }
}

// const mapStateToProps = (state) => ({
//   restaurantId: state.api.restaurantDetails.id,
//   userId: state.auth.user.id
// });

const mapDispatchToProps = (dispatch) => ({
  addReview: (review) => dispatch(addReview(review))
});

export default connect(null, mapDispatchToProps)(ReviewForm);
