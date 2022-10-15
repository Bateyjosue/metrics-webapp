/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDumeBook } from '../../Redux/Books/reducerBooks';
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
        <span className="material-symbols-outlined">search</span>
      </div>
      <div className="Banner">
        <img src={banner} alt="Banner SectionImage" />
        <h1 className="banner-title">Bob&apos;s Burgers Characters</h1>
      </div>
      <section>
        {filterBook !== [] && filter === '' && (
          books.map((book) => (
            <article key={book.id}>
              <div className="card-image">
                <img src={book.image} alt="" width={80} />
                <span className="material-symbols-outlined" id={book.id}>
                  <Link to={`/characters/${book.id}`}>
                    arrow_circle_right
                  </Link>
                </span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{book.name}</h3>
                <p>{book.gender}</p>
              </div>
            </article>
          ))
        )}
        {filterBook && filter !== '' && (
          filterBook.map((book) => (
            <article key={book.id}>
              <div className="card-image">
                <img src={book.image} alt="" width={80} />
                <span className="material-symbols-outlined" id={1}>
                  <Link to={`/characters/${book.id}/details`}>
                    arrow_circle_right
                  </Link>
                </span>
              </div>
              <div className="card-body">
                <h4 className="card-title">{book.name}</h4>
                <p>{book.gender}</p>
              </div>
            </article>
          ))
        )}
        {filterBook === [] && filter === '' && (<div> Filter Not Match!!!</div>)}
      </section>
    </>
  );
}
