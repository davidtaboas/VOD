import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import FaArrowCircleOLeft from 'react-icons/lib/fa/arrow-circle-o-left';
import FaPlay from 'react-icons/lib/fa/play';
import FaPause from 'react-icons/lib/fa/pause';
import FaVideoCamera from 'react-icons/lib/fa/video-camera';

class Video extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      isPlaying: false,
      isFullscreen: false,
    };
  }
  componentDidMount() {
    this.video = document.getElementById('video');
    this.video.addEventListener('ended', () => {
      this.props.history.goBack();
    });
  }

  handlePlayPause = () => {
    if (this.state.isPlaying) {
      this.setState({
        isPlaying: false,
      });
      this.video.pause();
    } else {
      this.setState({
        isPlaying: true,
      });
      this.video.play();
    }
  };

  handleFullScreen = () => {
    if (this.video.requestFullscreen) {
      this.video.requestFullscreen();
    } else if (this.video.mozRequestFullScreen) {
      this.video.mozRequestFullScreen();
    } else if (this.video.webkitRequestFullscreen) {
      this.video.webkitRequestFullscreen();
    }
  };

  render() {
    const videoStyle = {
      width: '100%',
      height: '100%',
      position: 'absolute',
    };
    const { isPlaying } = this.state;
    return (
      <div className="video">
        <div className="video__mask">
          <Link to={'/'}>
            <div className="video__button--close" tabIndex={0} role="button">
              <FaArrowCircleOLeft size={45} />
            </div>
          </Link>
          <video
            id="video"
            src="http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4"
            style={videoStyle}
          >
            <track kind="captions" />
          </video>
          <div className="video__controls">
            <a
              className="video__controls__button video__controls__button--play"
              tabIndex={-1}
              role="button"
              onClick={this.handlePlayPause}
            >
              {isPlaying ? <FaPause /> : <FaPlay />}
            </a>
            <a
              className="video__controls__button video__controls__button--full-screen"
              tabIndex={-2}
              role="button"
              onClick={this.handleFullScreen}
            >
              <FaVideoCamera />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Video.propTypes = {
  history: PropTypes.object.isRequired,
};

export default withRouter(Video);
