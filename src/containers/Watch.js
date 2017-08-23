import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Video from '../components/Video/Video';

class Watch extends PureComponent {
  render() {
    const { contents, movies } = this.props.entities;
    const videoID = this.props.match.params.videoID;
    return (
      <div>
        {movies[videoID]
          ? <Video content={contents[movies[videoID].contents[0]]} />
          : null}
      </div>
    );
  }
}

Watch.propTypes = {
  entities: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    entities: state.entities
  };
}

export default connect(mapStateToProps, null)(Watch);
