import React, { Component } from 'react';
import axios from 'axios';

import EditReviewForm from './EditReviewForm';
import ReviewItem from './ReviewItem';

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      text: props.originalText,
      rating: props.originalRating
    };
  }

  toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
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

  handleEdit = () => {
    const { id, originalText, originalRating, editReview, edited } = this.props;
    const { text, rating } = this.state;
    if (originalText !== text || originalRating !== rating || edited) {
      axios
        .patch(`http://localhost:3001/reviews/${id}`, {
          review: {
            text: text,
            rating: rating,
            edited: true
          }
        })
        .then((res) => {
          editReview(res.data);
          this.setState({
            isEditing: !this.state.isEditing
          });
        });
    } else {
      axios
        .patch(`http://localhost:3001/reviews/${id}`, {
          review: {
            edited: false
          }
        })
        .then((res) => {
          editReview(res.data);
          this.setState({
            isEditing: !this.state.isEditing
          });
        });
    }
  };

  handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/reviews/${id}`)
      .then((res) => this.props.deleteReview(res.data.id));
  };

  renderDate = (createdAt) => {
    const date = new Date(createdAt).toLocaleDateString();
    return date;
  };

  renderTime = (createdAt) => {
    const time = new Date(createdAt).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    return time;
  };

  render() {
    const { id, edited, username, createdAt, currentUser } = this.props;
    const { text, rating, isEditing } = this.state;
    return (
      <>
        {isEditing ? (
          <EditReviewForm
            id={id}
            text={text}
            rating={rating}
            username={username}
            createdAt={createdAt}
            currentUser={currentUser}
            handleRate={this.handleRate}
            handleChange={this.handleChange}
            renderDate={this.renderDate}
            renderTime={this.renderTime}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
          />
        ) : (
          <ReviewItem
            id={id}
            edited={edited}
            text={text}
            rating={rating}
            username={username}
            createdAt={createdAt}
            currentUser={currentUser}
            renderDate={this.renderDate}
            renderTime={this.renderTime}
            toggleEdit={this.toggleEdit}
            handleDelete={this.handleDelete}
          />
        )}
      </>
    );
  }
}

export default Review;
