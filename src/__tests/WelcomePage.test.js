import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStrore';
import Home from '../components/home/WelcomePage';

describe('The test of welcome page component', () => {
  it('Should display all the rendered items from api', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });

  it('Should also render diffetent part of the app by routing', () => {
    const path = renderer
      .create(
        <Provider store={store}>
          <Home />
        </Provider>,
      )
      .toJSON();
    expect(path).toMatchSnapshot();
  });
});
