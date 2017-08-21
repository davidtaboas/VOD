import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import logo from '../images/logo.svg';
import './App.css';

import * as MoviesActions from '../redux/movies';

class Root extends Component {
  componentDidMount() {
    this.props.actions.fetchMoviesIfNeeded();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...MoviesActions }, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
