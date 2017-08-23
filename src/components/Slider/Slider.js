import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { nextSlide, prevSlide } from './../../redux/actions';
import './Slider.scss';

import SlideItem from './SlideItem';
import SlideNav from './SlideNav';

class Slider extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
  }
  render() {
    const { slider, movies } = this.props;
    if (slider.items.length) {
      return (
        <div className="slider">
          <SlideNav action="prev" />
          <div className="sliderMask">
            <div className="slider__content">
              {slider.currentItems.map(item =>
                <SlideItem movie={movies[item]} />
              )}
            </div>
          </div>
          <SlideNav action="next" />
        </div>
      );
    }

    return <p>No hay películas</p>;
  }
}

Slider.propTypes = {
  slider: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    slider: state.ui.slider,
    movies: state.entities.movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ nextSlide }, dispatch),
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider);
