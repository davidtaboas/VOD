import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';

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
        <ul className="history__list">
          { Object.keys(movies).length ?
            history.map(item => (
              <li key={item.viewedAt} className="history__list--item">
                <img className="history__list--item--image" src={movies[item.video].images[0].url} alt={item.video} />
                <p className="history__list--item--title">{movies[item.video].title}</p>
                <p className="history__list--item--date"><Moment format="YYYY/MM/DD HH:mm" date={item.viewedAt} /></p>
              </li>
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
