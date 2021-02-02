import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Step4 from './Step4';
import { store } from '../store';

it('renders Step4 correctly', () => {
  const tree = renderer.create(<Router><Provider store={store}><Step4 /></Provider></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});