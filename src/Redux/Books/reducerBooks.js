import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://bobsburgers-api.herokuapp.com/characters/?limit=10&skip=489';
const BASE_URL_SINGLE = 'https://bobsburgers-api.herokuapp.com/characters';
const stateInit = [];
const GET_DUME_BOOK = 'GET_DUME_BOOK';
const GET_SINGLE_BOOK = 'GET_SINGLE_BOOK';

const reducerDukeBooks = (state = stateInit, action) => {
  switch (action.type) {
    case `${GET_DUME_BOOK}/fulfilled`: return [...state, ...action.payload];
    default: return state;
  }
};
export const reducerSingleDukeBooks = (state = stateInit, action) => {
  switch (action.type) {
    case `${GET_SINGLE_BOOK}/fulfilled`: return { ...state, ...action.payload };
    default: return state;
  }
};

export const getDumeBook = createAsyncThunk(
  GET_DUME_BOOK,
  async () => {
    const resp = await axios.get(BASE_URL);
    const data = await resp.data.map((book) => ({
      id: book.id ? book.id : null,
      name: book.name ? book.name : null,
      image: book.image ? book.image : null,
      gender: book.gender ? book.gender : null,
    }));
    return data;
  },
);

export const getSingleBook = createAsyncThunk(
  GET_SINGLE_BOOK,
  async (id) => {
    const resp = await axios.get(`${BASE_URL_SINGLE}/${id}`);
    const data = {
      id: resp.data.id,
      name: resp.data.name ? resp.data.name : '-',
      image: resp.data.image,
      gender: resp.data.gender ? resp.data.gender : '-',
      age: resp.data.age ? resp.data.age : '-',
      hairColor: resp.data.hairColor ? resp.data.hairColor : '-',
      wikiUrl: resp.data.wikiUrl ? resp.data.wikiUrl : '#',
      relatives: resp.data.relatives ? resp.data.relatives : 'No Relatives',
      occupation: resp.data.occupation ? resp.data.occupation : '-',
      firstEpisodes: resp.data.firstEpisodes ? resp.data.firstEpisodes : '-',
      voiceBy: resp.data.voiceBy ? resp.data.voiceBy : '-',
    };
    return data;
  },
);

export default reducerDukeBooks;
