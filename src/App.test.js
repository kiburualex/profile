import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

import App from './App';
import Subscribe from './pages/Subscribe';
import ThankYou from './pages/ThankYou';
import NotFoundPage from './pages/NotFoundPage';


test('invalid path should redirect to 404', () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={[ '/random' ]}>
      <App/>
    </MemoryRouter>
  );

  expect(wrapper.find(Subscribe)).toHaveLength(0);
  expect(wrapper.find(ThankYou)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);

});
