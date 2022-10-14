/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleBook } from '../Redux/Books/reducerBooks';

function BookDetails() {
  const dispatch = useDispatch();
  const param = useParams();
  const books = useSelector((state) => state.singleBook);
  const { id } = param;

  useEffect(() => {
    if (books.length === 0) dispatch(getSingleBook(id));
  }, []);

  const {
    name, image, age, gender, hairColor, relatives, occupation, firstEpisode, voiceBy, wikiUrl,
  } = books;

  return (
    <div className="single-book__details">
      <article className="card-Single">
        <div className="card-img__single">
          <img src={image} alt="" />
        </div>
        <div className="card-body__single">
          <h2>{name}</h2>
          <p>
            Age:
            {' '}
            {age}
          </p>
          <p>
            Gender:
            {' '}
            {gender}
          </p>
          <p>
            Hair-Color:
            {' '}
            {hairColor}
          </p>
          <p>
            Relatives:
            {' '}
            {relatives}
          </p>
          <p>
            Occupation:
            {' '}
            {occupation}
          </p>
          <p>
            First-Episode:
            {' '}
            {firstEpisode}
          </p>
          <p>
            Voice By:
            {' '}
            {voiceBy}
          </p>
          <p>
            <a href={wikiUrl}>Wiki Link</a>
          </p>
        </div>
      </article>
    </div>
  );
}

export default BookDetails;
