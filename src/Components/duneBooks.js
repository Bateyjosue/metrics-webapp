// /* eslint-disable react/prop-types */
// /* eslint-disable react/require-default-props */
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const DuneBooks = ({ books }) => {
//   const {
//     name, image, gender,
//   } = books;
//   return (
//     <>
//       <article>
//         <div className="card-image">
//           <img src={image} alt="" width={80} />
//           <span className="material-symbols-outlined" id={1}>
//             <Link to={`/characters/${1}/details`}>
//               arrow_circle_right
//             </Link>
//           </span>
//         </div>
//         <div className="card-body">
//           <h4 className="card-title">{name}</h4>
//           <p>{gender}</p>
//         </div>
//       </article>
//     </>
//   );
// };

// DuneBooks.propTypes = {
//   books: PropTypes.shape({
//     // key: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     gender: PropTypes.string.isRequired,
//   }),
// };

// export default DuneBooks;
