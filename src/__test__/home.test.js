import React from 'react';
import renderer from 'react-test-renderer';
import HomeSection from '../pages/home';

test('fit home snapshot', () => {
  const tree = renderer.create(<HomeSection />).toJSON();
  expect(tree).toMatchSnapshot();
});
