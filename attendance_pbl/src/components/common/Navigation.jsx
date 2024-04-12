import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { BiHome, BiUser, BiCalendar, BiLogOut } from 'react-icons/bi';
import axios from 'axios'; // Import Axios for making HTTP requests
import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => {
  const navigate = useNavigate(); // Use the useNavigate hook to navigate

  const handleLogout = () => {
    axios.post('http://localhost:3001/auth/logout')
      .then(res => {
        if (res.data && res.data.success) {
          // Clear authentication state (if any)
          // Redirect to login page
          navigate('/login');
        } else {
          // Handle logout failure
          console.error('Logout failed');
        }
      })
      .catch(err => {
        console.error('Error:', err);
        // Handle error
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Dashboard</span>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">
            <BiHome className="me-1" /> Home
          </Link>
        </li>

        <li className="nav-item" style={{ marginLeft: '20px' }}> {/* Add margin */}
          <Link to="/manage-students" className="nav-link">
            <BiUser className="me-1" /> Manage Students
          </Link>
        </li>
        <li className="nav-item" style={{ marginLeft: '20px' }}> {/* Add margin */}
          <Link to="/attendance" className="nav-link">
            <BiCalendar className="me-1" /> Attendance
          </Link>
        </li>
        <li className="nav-item" style={{ marginLeft: '20px' }}> {/* Add margin */}
          <Link to="/" className="nav-link">
            <BiLogOut className="me-1" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navigation;
