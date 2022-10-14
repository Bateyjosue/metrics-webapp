/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDumeBook } from '../../Redux/Books/reducerBooks';
import DuneBooks from '../duneBooks';
import banner from '../../Assets/Images/banner.webp';

export default function DuneBook() {
  const [filter, setFilter] = useState('');
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  useEffect(() => {
    if (books.length === 0) dispatch(getDumeBook());
  }, []);

  const filterBook = books.filter((item) => {
    const items = item.name.toLowerCase().includes(filter.toLowerCase());
    return items;
  });
  return (
    <>
      <div className="search">
        <input
          type="text"
          placeholder="Filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <div className="Banner">
        <img src={banner} alt="Banner SectionImage" />
        <h1 className="banner-title">Bob&apos;s Burgers</h1>
      </div>
      <section>
        {filterBook !== [] && filter === '' && (
          books.map((book) => (
            <DuneBooks key={book.id} books={book} />
          ))
        )}
        {filterBook && filter !== '' && (
          filterBook.map((book) => (
            <DuneBooks key={book.id} books={book} />
          ))
        )}
        {filterBook === [] && filter === '' && (<div> Filter Not Match!!!</div>)}
      </section>
    </>
  );
}
