import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Form, TextArea, Button, Icon, Rating } from 'semantic-ui-react';

import { addReview } from '../../actions/apiActions';

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

  handleSubmit = async () => {
    const { text, rating } = this.state;
    const {
      userId,
      restaurantId,
      restaurantName,
      yelpId,
      addReview
    } = this.props;

    await axios.post('http://localhost:3001/restaurants', {
      restaurant: {
        name: restaurantName,
        yelp_id: yelpId
      }
    });
    const review = await axios.post('http://localhost:3001/reviews', {
      review: {
        text: text,
        rating: rating,
        user_id: userId,
        restaurant_id: restaurantId
      }
    });
    this.props.addReview(review.data);
    this.setState({
      text: '',
      rating: 0
    });
  };

  render() {
    const { text, rating } = this.state;
    return (
      <Form className='review' onSubmit={this.handleSubmit}>
        <strong>Select a rating:</strong>{' '}
        <Rating
          clearable
          size='huge'
          rating={rating}
          maxRating={5}
          onRate={this.handleRate}
        />
        <TextArea
          name='text'
          placeholder='Write a review...'
          value={text}
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

const mapStateToProps = (state) => ({
  restaurantId: state.yelp.restaurantDetails.id,
  userId: state.auth.user.id,
  restaurantName: state.yelp.restaurantDetails.name,
  yelpId: state.yelp.restaurantDetails.id
});

const mapDispatchToProps = (dispatch) => ({
  addReview: (review) => dispatch(addReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
