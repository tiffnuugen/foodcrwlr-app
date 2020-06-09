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
    const { term, location } = this.state;
    const { fetchRestaurants, history } = this.props;
    fetchRestaurants({
      term: term,
      location: location
    });
    history.push(`/search?term=${term}&location=${location}`);
    this.setState({
      term: '',
      location: ''
    });
  };

  render() {
    const { term, location } = this.state;
    return (
      <form className='search form container' onSubmit={this.handleSubmit}>
        <Search
          fluid
          icon={null}
          name='term'
          placeholder='Search restaurants...'
          showNoResults={false}
          value={term}
          onSearchChange={this.handleSearchChange}
        />
        <Search
          fluid
          icon={null}
          name='location'
          placeholder='near this location...'
          showNoResults={false}
          value={location}
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
  loading: state.yelp.loading
});

const mapDispatchToProps = (dispatch) => ({
  fetchRestaurants: (searchValues) => dispatch(fetchRestaurants(searchValues))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(RestaurantForm)
);
