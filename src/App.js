import './App.css';

import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import Home from './Home';
import Nav from './Nav';

function App() {
  return (
    <HashRouter>
      <Nav/>
      <div className='content-container'>
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home/>} />
        </Routes>
      </div>
      
    </HashRouter>
  );
}

export default App;
