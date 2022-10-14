import './App.css';
// import { Routes, Route, NavLink} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import DuneBook from './Components/Pages/duneBook';
import logo from './Assets/Images/logo.png';
import DuneBooks from './Components/duneBooks';
import BookDetails from './Components/BookDetails';

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <div className="logo">
            <span className="material-symbols-outlined">chevron_left</span>
            <img src={logo} alt="Burger Logo" />
          </div>
        </header>
        <main>
          <DuneBook />
        </main>
      </div>
      <Routes>
        <Route path="/" element={<DuneBooks />} />
        <Route path="/characters/:id/details" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
