import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Step3 from './Step3';
import { store } from '../store';

it('renders Step3 correctly', () => {
  const tree = renderer.create(<Provider store={store}><Step3 /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});