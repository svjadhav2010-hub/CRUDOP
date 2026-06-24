import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {React,useState} from 'react';
import Home from './components/home.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
