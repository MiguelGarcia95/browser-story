import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../index';

import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import renderer from 'react-test-renderer';

afterEach(cleanup);

it("renders without crashing", () => {
  const div = document.createElement('div');
  ReactDOM.render(<Navbar></Navbar>, div);
});

it("renders button correctly", () => {
  const {getByTestId} = render(<Navbar name='hi!'></Navbar>);
  expect(getByTestId('navbar')).toHaveTextContent("hi!");
})

it("renders button correctly", () => {
  const {getByTestId} = render(<Navbar name='delete!'></Navbar>);
  expect(getByTestId('navbar')).toHaveTextContent("delete!");
})

it("matches snapshot 1", () => {
  const tree = renderer.create(<Navbar name='delete!'></Navbar>).toJSON();
  expect(tree).toMatchSnapshot();
})

it("matches snapshot 2", () => {
  const tree = renderer.create(<Navbar name='ha2!'></Navbar>).toJSON();
  expect(tree).toMatchSnapshot();
})