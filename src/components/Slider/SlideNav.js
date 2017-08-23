import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';

import { nextSlide, prevSlide } from './../../redux/actions';

class SlideNav extends Component {
  actionSlide = () => {
    if (this.props.action === 'prev') {
      this.props.actions.prevSlide();
    } else {
      this.props.actions.nextSlide();
    }
  };

  render() {
    const { action } = this.props;
    return (
      <span
        className={`slider__nav slider__nav--${action}`}
        aria-hidden
        onClick={this.actionSlide}
        role="button"
      >
        {action === 'prev'
          ? <FaAngleLeft size="35" style={{ alignSelf: 'center' }} />
          : <FaAngleRight size="35" style={{ alignSelf: 'center' }} />}
      </span>
    );
  }
}

SlideNav.propTypes = {
  action: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    images: state.entities.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ nextSlide, prevSlide }, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideNav);
