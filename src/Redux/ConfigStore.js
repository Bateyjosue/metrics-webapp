import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerDukeBooks from './Books/reducerBooks';

const reducer = combineReducers({
  books: reducerDukeBooks,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
