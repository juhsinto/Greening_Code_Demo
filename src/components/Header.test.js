import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';


it('renders Header correctly with default message', () => {
  const tree = renderer.create(<Header></Header>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders Header correctly with custom message', () => {
    let message = "A test message"
    const tree = renderer.create(<Header message={message}></Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });