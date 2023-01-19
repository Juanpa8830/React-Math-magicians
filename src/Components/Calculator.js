import { useState } from 'react';
import NumbButton from './numb-button';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
    display: '0',
  });

  const eventClick = (buttonName) => {
    let display = '';
    const { total, next, operation } = calculate(state, buttonName);

    if (operation !== null && operation !== undefined) {
      display = next !== null && next !== undefined ? next : total;
    } else if (next !== null && next !== undefined) {
      display = next;
    } else if (total !== null && total !== undefined) {
      display = total;
    }
    setState({
      total,
      next,
      operation,
      display,
    });
  };

  const { display } = state;
  return (

    <section className="calculator-container">
      <p className="display">{display}</p>
      <NumbButton addClass="AC" element="AC" functionClick={eventClick} />
      <NumbButton addClass="mm" element="+/-" functionClick={eventClick} />
      <NumbButton addClass="porcentaje" element="%" functionClick={eventClick} />
      <NumbButton addClass="nueve" element="9" functionClick={eventClick} />
      <NumbButton addClass="ocho" element="8" functionClick={eventClick} />
      <NumbButton addClass="siete" element="7" functionClick={eventClick} />
      <NumbButton addClass="seis" element="6" functionClick={eventClick} />
      <NumbButton addClass="cinco" element="5" functionClick={eventClick} />
      <NumbButton addClass="cuatro" element="4" functionClick={eventClick} />
      <NumbButton addClass="tres" element="3" functionClick={eventClick} />
      <NumbButton addClass="dos" element="2" functionClick={eventClick} />
      <NumbButton addClass="uno" element="1" functionClick={eventClick} />
      <NumbButton addClass="cero" element="0" functionClick={eventClick} />
      <NumbButton addClass="decimal" element="." functionClick={eventClick} />
      <NumbButton addClass="division" element="÷" functionClick={eventClick} />
      <NumbButton addClass="multiplicar" element="x" functionClick={eventClick} />
      <NumbButton addClass="restar" element="-" functionClick={eventClick} />
      <NumbButton addClass="sumar" element="+" functionClick={eventClick} />
      <NumbButton addClass="igual" element="=" functionClick={eventClick} />
    </section>
  );
};

export default Calculator;
