import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStrore';
import NavBar from '../components/navBar/NavBar';

describe('Navbar testing component', () => {
  it('Should render the navigation bar of the project', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <NavBar />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
