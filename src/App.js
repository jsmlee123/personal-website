import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <HashRouter>
      <div className='d-flex flex-column flex-grow-1 align-items-center'>
        <Nav/>
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
