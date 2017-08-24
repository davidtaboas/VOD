import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { newVideoViewed } from './../redux/actions';
import Video from '../components/Video/Video';

class Watch extends PureComponent {
  componentWillMount() {
    this.videoID = this.props.match.params.videoID;
    this.props.dispatch(newVideoViewed(this.videoID));
  }
  render() {
    const { contents, movies } = this.props.entities;
    return (
      <div>
        {movies[this.videoID]
          ? <Video content={contents[movies[this.videoID].contents[0]]} />
          : null}
      </div>
    );
  }
}

Watch.propTypes = {
  entities: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    entities: state.entities,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ newVideoViewed }, dispatch),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);
