import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/ConfigureStrore';
import Details from '../components/details/DetailsPage';

describe('Detail page component test', () => {
  it('Should return/render the item detail', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Details />
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
