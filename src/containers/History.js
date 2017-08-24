import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left';


class History extends PureComponent {
  render() {
    const { movies, history } = this.props;
    return (
      <div className="history">
        <Link to={'/'}>
          <div className="history__button--close" tabIndex={0} role="button">
            <FaArrowCircleOLeft size={45} />
          </div>
        </Link>
        <ul>
          { Object.keys(movies).length ?
            history.map(item => (
              <li>{item.video} - {item.viewedAt}</li>
            ))
            : null
          }
        </ul>
      </div>
    );
  }
}

History.propTypes = {
  movies: PropTypes.object.isRequired,
  history: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  return {
    movies: state.entities.movies,
    history: state.history,
  };
}


export default connect(mapStateToProps, null)(History);
