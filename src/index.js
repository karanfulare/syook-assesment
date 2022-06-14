import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from './App';
import Pollresult from './components/Pollresult';
import Dishes from './components/Dishes';
import UserLogin from './components/UserLogin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<UserLogin/>} />
     <Route path='/home' element={<App />} />
     <Route path='/pollresult' element={<Pollresult/>} />
     <Route path='/dishes' element={<Dishes/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

