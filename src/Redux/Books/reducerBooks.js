import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
const BASE_URL = 'https://the-dune-api.herokuapp.com/books/15';
const GET_DUME_BOOK = 'GET_DUME_BOOK';
const stateInit = [];

const reducerDukeBooks = (state=stateInit, actions) => {
  switch(actions.type){
    case `${GET_DUME_BOOK}/fulfilled`: return [...state, ...actions.payload]
    default: return state;
  }
}

export const getDumeBook = createAsyncThunk(
  GET_DUME_BOOK,
  async () => {
    const resp = await axios.get(BASE_URL);
    return resp.data;
  }
);

export default  reducerDukeBooks
