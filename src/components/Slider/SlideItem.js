import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SlideItem extends PureComponent {
  render() {
    const { movie, showTitle } = this.props;
    const styleItem = {
      backgroundImage: `url(${movie.images[0].url})`,
    };
    return (
      <Link to={`/watch/${movie.id}`}>
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
      </Link>
    );
  }
}

SlideItem.propTypes = {
  movie: PropTypes.object.isRequired,
  showTitle: PropTypes.bool,
};

SlideItem.defaultProps = {
  showTitle: true,
};

function mapStateToProps(state) {
  return {
    images: state.entities.images,
  };
}

export default connect(mapStateToProps, {})(SlideItem);
