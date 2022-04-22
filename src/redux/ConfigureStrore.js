// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import dataReducer from './Reducers';

const reducer = combineReducers({ dataReducer });
const store = createStore(
  reducer, composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
