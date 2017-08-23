import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchMovies } from '../redux/actions';

import Slider from '../components/Slider/Slider';

class Root extends Component {
  componentWillMount() {
    this.props.actions.fetchMovies();
  }
  render() {
    const { movies } = this.props;
    if (movies.isFetching) {
      return <p>Cargando...</p>;
    } else if (!movies.isFetching && movies.totalCount) {
      return <Slider />;
    }
    return <p>No hay películas</p>;
  }
}

Root.propTypes = {
  actions: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ fetchMovies }, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
