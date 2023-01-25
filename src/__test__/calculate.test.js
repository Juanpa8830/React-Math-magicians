import calculate from '../logic/calculate';
// arrange, action, assert
describe('click AC button', () => {
  test('Return {total:null, next:null, operation:null}', () => {
    const myObj = {
      total: '4', next: '4', operation: '-',
    };
    const ResObj = {
      total: null, next: null, operation: null,
    };
    expect(calculate(myObj, 'AC')).toStrictEqual(ResObj);
  });
});
describe('click number button, then:', () => {
  test('if there is an operation, update next', () => {
    const myObj = {
      total: '2', next: '23', operation: '+',
    };
    const ResObj = {
      total: '2', next: '235', operation: '+',
    };
    expect(calculate(myObj, '5')).toEqual(ResObj);
  });
  test('if there is not an operation, append number to next and clear total', () => {
    const myObj = {
      total: '2', next: '23', operation: null,
    };
    const ResObj = {
      total: null, next: '235',
    };
    expect(calculate(myObj, '5')).toEqual(ResObj);
  });
  test('otherwise, update next and clear total', () => {
    const myObj = {
      total: '2', next: null, operation: null,
    };
    const ResObj = {
      total: null, next: '5',
    };
    expect(calculate(myObj, '5')).toEqual(ResObj);
  });
});
describe('User press . button, then:', () => {
  test('If next is not null, append . to next', () => {
    const myObj = {
      total: '255', next: '21', operation: '+',
    };
    const ResObj = {
      total: '255', next: '21.', operation: '+',
    };
    expect(calculate(myObj, '.')).toEqual(ResObj);
  });
  test('If next is null and operation is not null, next will be 0.', () => {
    const myObj = {
      total: '255', next: null, operation: '+',
    };
    const ResObj = {
      total: '255', next: '0.', operation: '+',
    };
    expect(calculate(myObj, '.')).toEqual(ResObj);
  });
  test('If next and operation are null and total is not null, copy total in next & append .', () => {
    const myObj = {
      total: '255', next: null, operation: null,
    };
    const ResObj = {
      total: '255', next: '255.', operation: null,
    };
    expect(calculate(myObj, '.')).toEqual(ResObj);
  });
  test('If next and operation are null and total already includes ., return {}', () => {
    const myObj = {
      total: '255.', next: null, operation: null,
    };
    const ResObj = {};
    expect(calculate(myObj, '.')).toEqual(ResObj);
  });
  test('Otherwise, return next: 0.', () => {
    const myObj = {
      total: null, next: null, operation: null,
    };
    const ResObj = {
      total: null, next: '0.', operation: null,
    };
    expect(calculate(myObj, '.')).toEqual(ResObj);
  });
});
describe('User press = button, then:', () => {
  test('will return the value of 4 by adding 2 + 2', () => {
    const myObj = {
      total: '2', next: '2', operation: '+',
    };
    const ResObj = {
      total: '4', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 5 by substract 8 - 3', () => {
    const myObj = {
      total: '8', next: '3', operation: '-',
    };
    const ResObj = {
      total: '5', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('will return the value of 6 by multiply 3 x 2', () => {
    const myObj = {
      total: '3', next: '2', operation: 'x',
    };
    const ResObj = {
      total: '6', next: null, operation: null,
    };
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
  test('if operation is null, pressing equal return null', () => {
    const myObj = {
      total: '256.', next: null, operation: null,
    };
    const ResObj = {};
    expect(calculate(myObj, '=')).toEqual(ResObj);
  });
});
describe('User press +/- button, then:', () => {
  test('If next is not null, return the inverse of next', () => {
    const myObj = {
      total: '23.96', next: '2.36', operation: '+',
    };
    const ResObj = {
      total: '23.96', next: '-2.36', operation: '+',
    };
    expect(calculate(myObj, '+/-')).toEqual(ResObj);
  });
  test('If next is null but total is not null, return the inverse of total', () => {
    const myObj = {
      total: '-23.96', next: null, operation: '+',
    };
    const ResObj = {
      total: '23.96', next: null, operation: '+',
    };
    expect(calculate(myObj, '+/-')).toEqual(ResObj);
  });
  test('Otherwise, return {}', () => {
    const myObj = {
      total: null, next: null, operation: '+',
    };
    const ResObj = {};
    expect(calculate(myObj, '+/-')).toEqual(ResObj);
  });
});
describe('User press operation button, then:', () => {
  test('If previously pressed =, returns new operation', () => {
    const myObj = {
      total: '23.96', next: null, operation: null,
    };
    const ResObj = {
      total: '23.96', next: null, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
  test('If operation and total are not null and next is null, return the new operation', () => {
    const myObj = {
      total: '-23.96', next: null, operation: '+',
    };
    const ResObj = {
      total: '-23.96', next: null, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
  test('If operation and next are not null and total is null, return the new operation and total:0', () => {
    const myObj = {
      total: null, next: '258', operation: '+',
    };
    const ResObj = {
      total: 0, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
  test('Otherwise, return {total:operate,next:null, new operation} ', () => {
    const myObj = {
      total: '555', next: '45', operation: '+',
    };
    const ResObj = {
      total: '600', next: null, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
  test('If operation is null and next is null, save the operation', () => {
    const myObj = {
      total: '550', next: null, operation: null,
    };
    const ResObj = {
      total: '550', next: null, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
  test('If operation is null and next is not null, save the operation and shift next into total', () => {
    const myObj = {
      total: null, next: '500', operation: null,
    };
    const ResObj = {
      total: '500', next: null, operation: '/',
    };
    expect(calculate(myObj, '/')).toEqual(ResObj);
  });
});
