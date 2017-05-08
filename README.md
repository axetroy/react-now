# react-now

react component for rend the time now.

## Install

```bash
yarn add @axetroy/react-now
```

## Usage

```jsx harmony
import React, { Component } from 'react';
import { render } from 'react-dom';
import Now from '@axetroy/react-now';

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
```

## Props

- interval: number

ref: setInterval(function, interval)

default: 1000
    
## Run the Demo

```bash
git clone https://github.com/axetroy/react-now.git
yarn
yarn start
```

### License

The [MIT License](https://github.com/axetroy/react-now/blob/master/LICENSE)