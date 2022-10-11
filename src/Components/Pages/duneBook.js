import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDumeBook } from '../../Redux/Books/reducerBooks';
import DuneBooks from '../duneBooks';

export default function DuneBook() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getDumeBook());
  });
  return (
    <section>
      { books.map((book) => (
        <DuneBooks key={book.id} books={book} />
      ))}
    </section>
  );
}
