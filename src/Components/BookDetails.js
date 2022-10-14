import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBook } from '../Redux/Books/reducerBooks';

function BookDetails() {
  const dispatch = useDispatch();
  const param = useParams();
  const books = useSelector((state) => state.books);
  const { id } = param;

  useEffect(() => {
    if (books.length === 0) {
      return dispatch(getSingleBook(id));
    }
    return 0;
  }, [id, dispatch, books.length]);

  const {
    name, image, age, gender, hairColor, relatives, ocupation, firstEpisode, voiceBy, wikiUrl,
  } = books;

  return (
    <section>
      <article className="card-Single">
        <div className="card-img__single">
          <img src={image} alt="" />
        </div>
        <div className="card-body__single">
          <h2>{name}</h2>
          <p>{age}</p>
          <p>{gender}</p>
          <p>{hairColor}</p>
          <p>{relatives}</p>
          <p>{ocupation}</p>
          <p>{firstEpisode}</p>
          <p>{voiceBy}</p>
          <p>
            <a href={wikiUrl}>Wiki Link</a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default BookDetails;
