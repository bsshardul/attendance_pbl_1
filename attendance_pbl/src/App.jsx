import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch

import Dashboard from './components/dashboard';
import ManageStudents from './components/managestudents';
import Attendance from './components/attendance'; // Importing Attendance with default export
import Login from './components/login'; // Import the Login component

import NotFound from './components/NotFound'; // You may want to create a NotFound component for 404 errors

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path='/' element={<Login />} />
        <Route path='/facultylogin' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />

        
        <Route path="/manage-students" element={<ManageStudents />} />
        <Route path="/attendance" element={<Attendance />} />

        <Route path="*" element={<NotFound />} /> {/* Route for handling 404 */}
      </Routes>
    </Router>
  );
}

export default App;
