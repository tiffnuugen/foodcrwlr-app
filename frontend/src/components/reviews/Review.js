import React, { Component } from 'react';
import { Comment, Rating, Form } from 'semantic-ui-react';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';

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
      isEditing: true
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
    if (
      (!edited && (originalText !== text || originalRating !== rating)) ||
      (edited && originalText !== text && originalRating !== rating) ||
      (edited && (originalText === text || originalRating === rating))
    ) {
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
            isEditing: false
          });
        });
    } else {
      axios
        .patch(`http://localhost:3001/reviews/${id}`, {
          review: {
            text: text,
            rating: rating,
            edited: false
          }
        })
        .then((res) => {
          editReview(res.data);
          this.setState({
            isEditing: false
          });
        });
    }
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
    const {
      id,
      edited,
      username,
      createdAt,
      currentUser,
      deleteReview
    } = this.props;
    const { text, rating, isEditing } = this.state;
    const handleDelete = (id) => {
      axios
        .delete(`http://localhost:3001/reviews/${id}`)
        .then((res) => {
          deleteReview(res.data.review_id);
        })
        .catch((error) => console.log(error));
    };
    return (
      <>
        {isEditing ? (
          <Form>
            <Comment>
              {/* <Comment.Avatar src='' /> */}
              <Rating
                clearable
                size='huge'
                rating={rating}
                maxRating={5}
                onRate={this.handleRate}
              />
              <Comment.Content>
                <Comment.Author as='a'>{username}</Comment.Author>
                <Comment.Metadata>
                  {this.renderDate(createdAt)} at {this.renderTime(createdAt)}
                </Comment.Metadata>
                <Comment.Text>
                  <TextareaAutosize
                    name='text'
                    value={text}
                    rows={1}
                    onChange={this.handleChange}
                  />
                </Comment.Text>
                <Comment.Actions>
                  {currentUser === username && (
                    <>
                      <Comment.Action onClick={() => this.handleEdit()}>
                        Done
                      </Comment.Action>
                      <Comment.Action onClick={() => handleDelete(id)}>
                        Delete
                      </Comment.Action>
                    </>
                  )}
                </Comment.Actions>
              </Comment.Content>
            </Comment>
          </Form>
        ) : (
          <Comment>
            {/* <Comment.Avatar src='' /> */}
            <Rating
              disabled
              size='large'
              defaultRating={rating}
              maxRating={5}
            />
            <Comment.Content>
              <Comment.Author as='a'>{username}</Comment.Author>
              <Comment.Metadata>
                {this.renderDate(createdAt)} at {this.renderTime(createdAt)}
              </Comment.Metadata>
              <Comment.Text>
                {text}
                <Comment.Metadata>
                  {currentUser === username && edited && '(edited)'}
                </Comment.Metadata>
              </Comment.Text>
              <Comment.Actions>
                {currentUser === username && (
                  <>
                    <Comment.Action onClick={() => this.toggleEdit()}>
                      Edit
                    </Comment.Action>
                    <Comment.Action onClick={() => handleDelete(id)}>
                      Delete
                    </Comment.Action>
                  </>
                )}
              </Comment.Actions>
            </Comment.Content>
          </Comment>
        )}
      </>
    );
  }
}

export default Review;
