import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import About from './About';
import Nav from './Nav';

function App() {
  return (
    <HashRouter>
      <div className='d-flex flex-column flex-grow-1 align-items-center'>
        <Nav/>
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Navigate to="About" />} />
            <Route path="About" element={<About/>} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
