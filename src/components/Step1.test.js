import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Step1 from './Step1';
import { store } from '../store';

it('renders Step1 correctly', () => {
  const tree = renderer.create(<Provider store={store}><Step1 /></Provider>).toJSON();
  expect(tree).toMatchSnapshot();
});