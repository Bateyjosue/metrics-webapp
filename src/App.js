import './App.css';
// import { Routes, Route, NavLink} from 'react-router-dom';
import DuneBook from './Components/Pages/duneBook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo">
          <h1>Metrics Apps</h1>
        </div>
      </header>
      <main>
        <DuneBook />
      </main>
    </div>
  );
}

export default App;
