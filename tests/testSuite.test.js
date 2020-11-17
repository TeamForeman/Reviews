import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../client/App.jsx';
import Adapter from 'enzyme-adapter-react-16';

// axios.defaults.baseURL = 'http://localhost:3002';



test('should render reviews', () => {
  expect(shallow(<App />).contains(<div>Reviews</div>)).toBe(true);

});