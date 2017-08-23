import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class SlideItem extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);
  }

  render() {
    const { movie, images, showTitle } = this.props;
    const styleItem = {
      backgroundImage: `url(${movie.images[0].url})`
    };
    return (
      <div className="slider__item">
        <div className="slider__item__container">
          <div className="slider__item__artwork" style={styleItem} />
          {showTitle
            ? <p className="slider__item__title">
                {movie.title}
              </p>
            : null}
        </div>
      </div>
    );
  }
}

SlideItem.propTypes = {
  movie: PropTypes.object.isRequired,
  images: PropTypes.object.isRequired,
  showTitle: PropTypes.bool
};

SlideItem.defaultProps = {
  showTitle: true
};

function mapStateToProps(state) {
  return {
    images: state.entities.images
  };
}

export default connect(mapStateToProps, {})(SlideItem);
