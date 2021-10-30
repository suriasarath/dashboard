import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './index.css';
interface AppProps {}
interface AppState {
  name: string;
}

function Inc() {
  const preVal = 0;
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <button className="button green" onClick={increment}>
      {counter}{' '}
    </button>
  );
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Inc />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
