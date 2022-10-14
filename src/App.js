import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import DuneBook from './Components/Pages/duneBook';
import BookDetails from './Components/BookDetails';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <Link to="/">
              <span className="material-symbols-outlined">chevron_left</span>
              {' '}
            </Link>
            <span>Bob&apos;s Burger</span>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<DuneBook />} />
          <Route path="/characters/:id" element={<BookDetails />} />
        </Routes>
        <footer>
          &copy; Copyright 2022, Josue Batey; All rights reserved
        </footer>
      </div>
    </>
  );
}

export default App;
