import operate from '../logic/operate';

describe('operate', () => {
  test('shoud return 12 after adding 8 + 4', () => {
    expect(operate('8', '4', '+')).toEqual('12');
  });
  test('shoud return 58 after operating 64 - 6', () => {
    expect(operate('64', '6', '-')).toEqual('58');
  });
  test('shoud return 1000 after operating 250 x 4', () => {
    expect(operate('4', '250', 'x')).toEqual('1000');
  });
  test('shoud return 25 after operating 200 ÷ 8', () => {
    expect(operate('200', '8', '÷')).toEqual('25');
  });
  test('shoud return 4 after operating 17 % 5', () => {
    expect(operate('17', '5', '%')).toEqual('2');
  });
  test('return a failed message if divide by zero', () => {
    expect(operate('12', '0', '÷')).toEqual('Can\'t divide by 0.');
  });
});
