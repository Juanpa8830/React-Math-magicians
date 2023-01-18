import React from 'react';
import NumbButton from './numb-button';
import OperatorButton from './operator-button';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="calculator-container">
        <p className="display">0</p>
        <NumbButton addClass="AC" element="AC" />
        <NumbButton addClass="mm" element="+/-" />
        <NumbButton addClass="porcentaje" element="%" />
        <NumbButton addClass="nueve" element="9" />
        <NumbButton addClass="ocho" element="8" />
        <NumbButton addClass="siete" element="7" />
        <NumbButton addClass="seis" element="6" />
        <NumbButton addClass="cinco" element="5" />
        <NumbButton addClass="cuatro" element="4" />
        <NumbButton addClass="tres" element="3" />
        <NumbButton addClass="dos" element="2" />
        <NumbButton addClass="uno" element="1" />
        <NumbButton addClass="cero" element="0" />
        <NumbButton addClass="decimal" element="." />
        <NumbButton addClass="division" element="/" />
        <OperatorButton addClass="multiplicar" element="x" />
        <OperatorButton addClass="restar" element="-" />
        <OperatorButton addClass="sumar" element="+" />
        <OperatorButton addClass="igual" element="=" />
      </section>
    );
  }
}
