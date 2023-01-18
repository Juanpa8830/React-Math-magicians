import React from 'react';
import Calculator from './Components/Calculator';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <div className="calc-container">
          <Calculator />
        </div>
      </div>
    );
  }
}
