import React, { Component } from 'react';
import { Form, Button, Icon } from 'semantic-ui-react';

class ReviewForm extends Component {
  render() {
    return (
      <Form reply>
        <Form.TextArea placeholder='Write a review...' />
        <Button size='large' floated='right' basic color='teal'>
          <Icon name='add' />
          Add Review
        </Button>
      </Form>
    );
  }
}

export default ReviewForm;
