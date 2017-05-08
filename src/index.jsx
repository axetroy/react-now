import React, { Component, PropTypes } from 'react';

class Now extends Component {
  state = {
    date: new Date()
  };

  componentWillMount() {
    this.__interval_id__ = setInterval(
      this.timer.bind(this),
      this.props.interval || 1000
    );
  }

  componentWillUnmount() {
    if (this.__interval_id__ !== void 0) {
      clearInterval(this.__interval_id__);
    }
  }

  timer() {
    this.setState({ date: new Date() });
  }

  render() {
    const render = this.props.children;
    return typeof render === 'function'
      ? render.call(this, this.state.date)
      : '';
  }
}

Now.PropTypes = {
  interval: PropTypes.number
};

export default Now;
