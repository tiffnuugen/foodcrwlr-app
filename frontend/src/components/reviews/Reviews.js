import React, { Component } from 'react';
import {
  Icon,
  Comment,
  Form,
  Button,
  Message,
  Divider,
  Header
} from 'semantic-ui-react';

import ReviewForm from './ReviewForm';

class Reviews extends Component {
  render() {
    return (
      <Comment.Group>
        <ReviewForm />
        <Divider section horizontal>
          <Header as='h2'>REVIEWS</Header>
        </Divider>
        {/* <Message>
          <Message.Header>No Reviews</Message.Header>
          <p>
            It looks like there are no reviews here yet. Be the first to leave
            one here.
          </p>
        </Message> */}
        <Comment>
          {/* <Comment.Avatar src='' /> */}
          <Comment.Content>
            <Comment.Author as='a'>Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Edit</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    );
  }
}

export default Reviews;
