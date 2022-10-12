import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_URL = 'https://bobsburgers-api.herokuapp.com/characters/?limit=10&skip=489';
const GET_DUME_BOOK = 'GET_DUME_BOOK';
const stateInit = [];

const reducerDukeBooks = (state = stateInit, action) => {
  switch (action.type) {
    case `${GET_DUME_BOOK}/fulfilled`: return [...state, ...action.payload];
    default: return state;
  }
};

export const getDumeBook = createAsyncThunk(
  GET_DUME_BOOK,
  async () => {
    const resp = await axios.get(BASE_URL);
    const data = await resp.data.map((book) => ({
      id: book.id,
      name: book.name,
      image: book.image,
      gender: book.denger ? book.denger : null,
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
