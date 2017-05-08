import React, { Component } from 'react';
import { render } from 'react-dom';
import Now from '../../lib/react-now';

class App extends Component {
  render() {
    return (
      <Now interval={1000}>
        {time => {
          return <span>{time.toString()}</span>;
        }}
      </Now>
    );
  }
}

const element = document.createElement('div');
document.body.appendChild(element);
render(<App />, element);
