import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Dashboard from './components/dashboard';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/facultylogin' element={<Login />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;