import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducerDukeBooks, { reducerSingleDukeBooks } from './Books/reducerBooks';

const reducer = combineReducers({
  books: reducerDukeBooks,
  singleBook: reducerSingleDukeBooks,
});

const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);

export default store;
