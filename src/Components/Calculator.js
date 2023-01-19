import React from 'react';
import NumbButton from './numb-button';
import OperatorButton from './operator-button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      display: '0',
    };
  }

  eventClick = (buttonName) => {
    let display = '';
    const { total, next, operation } = calculate(this.state, buttonName);

    if (operation !== null && operation !== undefined) {
      display = next !== null && next !== undefined ? next : total;
    } else if (next !== null && next !== undefined) {
      display = next;
    } else if (total !== null && total !== undefined) {
      display = total;
    }
    this.setState({
      total,
      next,
      operation,
      display,
    });
  }

  render() {
    const { display } = this.state;
    return (
      <section className="calculator-container">
        <p className="display">{display}</p>
        <NumbButton addClass="AC" element="AC" functionClick={this.eventClick} />
        <NumbButton addClass="mm" element="+/-" functionClick={this.eventClick} />
        <NumbButton addClass="porcentaje" element="%" functionClick={this.eventClick} />
        <NumbButton addClass="nueve" element="9" functionClick={this.eventClick} />
        <NumbButton addClass="ocho" element="8" functionClick={this.eventClick} />
        <NumbButton addClass="siete" element="7" functionClick={this.eventClick} />
        <NumbButton addClass="seis" element="6" functionClick={this.eventClick} />
        <NumbButton addClass="cinco" element="5" functionClick={this.eventClick} />
        <NumbButton addClass="cuatro" element="4" functionClick={this.eventClick} />
        <NumbButton addClass="tres" element="3" functionClick={this.eventClick} />
        <NumbButton addClass="dos" element="2" functionClick={this.eventClick} />
        <NumbButton addClass="uno" element="1" functionClick={this.eventClick} />
        <NumbButton addClass="cero" element="0" functionClick={this.eventClick} />
        <NumbButton addClass="decimal" element="." functionClick={this.eventClick} />
        <NumbButton addClass="division" element="/" functionClick={this.eventClick} />
        <OperatorButton addClass="multiplicar" element="x" functionClick={this.eventClick} />
        <OperatorButton addClass="restar" element="-" functionClick={this.eventClick} />
        <OperatorButton addClass="sumar" element="+" functionClick={this.eventClick} />
        <OperatorButton addClass="igual" element="=" functionClick={this.eventClick} />
      </section>
    );
  }
}
