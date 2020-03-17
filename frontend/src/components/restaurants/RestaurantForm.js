import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Search, Button } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import { fetchRestaurants } from '../../actions/yelpActions';

class RestaurantForm extends Component {
  state = {
    term: '',
    location: ''
  };

  handleSearchChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchRestaurants({
      term: this.state.term,
      location: this.state.location
    });
    this.props.history.push(
      `/search?term=${this.state.term}&location=${this.state.location}`
    );
    this.setState({
      term: '',
      location: ''
    });
  };

  render() {
    return (
      <form className='search form container' onSubmit={this.handleSubmit}>
        <Search
          fluid
          icon={null}
          name='term'
          placeholder='Search restaurants...'
          showNoResults={false}
          value={this.state.term}
          onSearchChange={this.handleSearchChange}
        />
        <Search
          fluid
          icon={null}
          name='location'
          placeholder='near this location...'
          showNoResults={false}
          value={this.state.location}
          onSearchChange={this.handleSearchChange}
        />
        {this.props.loading ? (
          <Button circular size='large' loading icon='user' />
        ) : (
          <Button circular size='large' icon='search' />
        )}
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.api.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: (searchValues) => dispatch(fetchRestaurants(searchValues))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantForm)
);
