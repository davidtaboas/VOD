import React, { PureComponent } from 'react';
import { HotKeys } from 'react-hotkeys';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import Slider from '../components/Slider/Slider';
import Header from '../components/Header/Header';

import { selectPrev, selectNext } from '../redux/actions';

const keyMap = {
  enter: 'enter',
  moveLeft: 'left',
  moveRight: 'right',
};

class Home extends PureComponent {
  componentDidMount() {
    this.layout.focus();
  }
  handleMoveLeft = () => {
    this.props.actions.selectPrev();
  }
  handleMoveRight = () => {
    this.props.actions.selectNext();
  }
  handleEnter = () => {
    document.getElementsByClassName('slider__item--selected')[0].click();
  }

  render() {
    const handlers = {
      enter: () => this.handleEnter(),
      moveLeft: () => this.handleMoveLeft(),
      moveRight: () => this.handleMoveRight(),
    };
    return (
      <HotKeys keyMap={keyMap} handlers={handlers}>
        <div className="page" ref={(refElem) => { this.layout = refElem; }}>
          <Header />
          <Slider />
        </div>
      </HotKeys>
    );
  }
}

Home.propTypes = {
  actions: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ selectNext, selectPrev }, dispatch),
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Home);
