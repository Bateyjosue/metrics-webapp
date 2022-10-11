/* eslint-disable react/require-default-props */

import PropTypes from 'prop-types';

const DuneBooks = ({ books }) => {
  const {
    id, name, image, age, gender, wikiUrl,
  } = books;
  return (
    <article>
      <div className="card-image">
        <img src={image} alt="" />
      </div>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p>{age}</p>
        <ul>
          <li>{id}</li>
          <li>{gender}</li>
          <li>{wikiUrl}</li>
        </ul>
      </div>
    </article>
  );
};

DuneBooks.propTypes = {
  books: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    wikiUrl: PropTypes.string.isRequired,
  }),
};

export default DuneBooks;
