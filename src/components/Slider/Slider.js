import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Slider.scss';

import SlideItem from './SlideItem';
import SlideNav from './SlideNav';

class Slider extends PureComponent {
  render() {
    const { slider, entities } = this.props;
    return (
      <div className="slider">
        <SlideNav action="prev" />
        <div className="sliderMask">
          <div className="slider__content">
            {slider.currentItems.map((item, index) => // list of items to show on slider
              (<SlideItem
                key={item}
                movie={entities.movies[item]}
                selected={(index - 1) === slider.currentPosition}
              />),
            )}
          </div>
        </div>
        <SlideNav action="next" />
      </div>
    );
  }
}

Slider.propTypes = {
  slider: PropTypes.object.isRequired,
  entities: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    slider: state.ui.slider,
    entities: state.entities,
    movies: state.movies,
  };
}

export default connect(mapStateToProps, null)(Slider);
