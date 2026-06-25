import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {React,useState} from 'react';
import Home from './components/home.jsx';
import Create from './components/create.jsx';
import Read from './components/read.jsx';
import Update from './components/update.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/create' element={<Create />} ></Route>
          <Route path='/read/:id' element={<Read />} ></Route>
          <Route path='/update/:id' element={<Update />} ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
