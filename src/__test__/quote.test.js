import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../pages/quote';

test('fit Quote snapshot', () => {
  const tree = renderer.create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
