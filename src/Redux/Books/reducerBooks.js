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
    case `${GET_SINGLE_BOOK}/fulfilled`: return [...state, ...action.id];
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
    const data = await resp.data.map((book) => ({
      id: book.id,
      name: book.name,
      image: book.image,
      gender: book.gender ? book.gender : null,
      age: book.age ? book.age : null,
      hairColor: book.hairColor ? book.hairColor : null,
      wikiUrl: book.wikiUrl,
      relatives: book.relatives ? book.relatives : [],
      occupation: book.occupation ? book.occupation : null,
      firstEpisodes: book.firstEpisodes ? book.firstEpisodes : null,
      voiceBy: book.voiceBy ? book.voiceBy : null,
    }));
    return data;
  },
);

export default reducerDukeBooks;
