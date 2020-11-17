import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/App.jsx';
import Adapter from 'enzyme-adapter-react-16';



test('should render hello', () => {
  expect(shallow(<App />).contains(<div>hello</div>)).toBe(true);
});