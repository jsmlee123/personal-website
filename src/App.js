import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router';
import About from './About';
import Nav from './Nav';
import Experience from './Experience';


const Nothing = () => {
  return (
    <div className='d-flex flex-column align-items-center justify-content-center nothing-to-see overflow-hidden'>
      <span className='spin'>Nothing to see here(yet?)</span>
    </div>
  );
};

function App() {
  return (
    <HashRouter>
      <div className='d-flex flex-column flex-grow-1 align-items-center'>
        <Nav/>
        <div className='content-container'>
          <Routes>
            <Route path="/" element={<Navigate to="About" />} />
            <Route path="About" element={<About/>} />
            {/*<Route path='Experience' element={<Experience/>} />*/}
            <Route path="*" element={<Nothing/>}/>
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
