import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Slider.scss';

import SlideItem from './SlideItem';
import SlideNav from './SlideNav';

class Slider extends PureComponent {
  render() {
    const { slider, movies, entities } = this.props;
    if (movies.isFetching) {
      return <p>Cargando...</p>;
    } else if (!movies.isFetching && movies.totalCount) {
      return (
        <div className="slider">
          <SlideNav action="prev" />
          <div className="sliderMask">
            <div className="slider__content">
              {slider.currentItems.map(item =>
                <SlideItem key={item} movie={entities.movies[item]} />
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
  entities: PropTypes.object.isRequired,
  movies: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    slider: state.ui.slider,
    entities: state.entities,
    movies: state.movies
  };
}

export default connect(mapStateToProps, null)(Slider);
