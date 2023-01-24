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

  const classChain = 'AC,mm,porcentaje,division,nueve,ocho,siete,seis,cinco,cuatro,tres,dos,uno,cero,decimal,multiplicar,restar,sumar,igual';
  const ClArr = classChain.split(',');
  const elementsChain = 'AC,+/-,%,÷,9,8,7,6,5,4,3,2,1,0,.,x,-,+,=';
  const elemArray = elementsChain.split(',');

  const btnList = elemArray.map((El, i) => {
    const btnkey = `btn${i}`;
    return (
      <NumbButton addClass={ClArr[i]} element={El} functionClick={eventClick} key={btnkey} />
    );
  });

  return (
    <div className="calc-section">
      <h2 className="calc-h2">Let&apos;s do some math!!</h2>
      <section className="calculator-container">
        <p className="display">{display}</p>
        {btnList}
      </section>
    </div>
  );
};

export default Calculator;
