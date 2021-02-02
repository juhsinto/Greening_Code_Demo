import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Step2 from './Step2';
import { store } from '../store';

it('renders Step2 correctly', () => {
  const tree = renderer.create(<Provider store={store}><Step2 /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});