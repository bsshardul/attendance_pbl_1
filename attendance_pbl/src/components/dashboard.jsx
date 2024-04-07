import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BiHome, BiUser, BiCalendar, BiLogOut } from 'react-icons/bi';

const Navigation = () => {
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
            <li className="nav-item"><Link to="/dashboard" className="nav-link"><BiHome className="me-1" /> Home</Link></li>
            <li className="nav-item"><Link to="/manage-students" className="nav-link"><BiUser className="me-1" /> Manage Students</Link></li>
            <li className="nav-item"><Link to="/attendance" className="nav-link"><BiCalendar className="me-1" /> Attendance</Link></li>
            <li className="nav-item"><Link to="/logout" className="nav-link"><BiLogOut className="me-1" /> Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  return (
    <header className="bg-light py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src="/Images/pictlogo.jpg" alt="Logo" height="100" />
          </div>
          <div className="col">
            <h1 className="text-center">Attendance Tracking by RFID</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark py-4 text-white text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <h5>Contact Us</h5>
            <p>
              Address:
              Survey No. 27, Near Trimurti Chowk
              Dhankwadi, Pune - 411043
            </p>
            <p>
              Email: registrar@pict.edu
            </p>
            <p>
              Phone: +91 20 24371101
              Fax: +91 20 24364741
            </p>
          </div>
          <div className="col-lg-4">
            {/* Empty column for spacing */}
          </div>
          <div className="col-lg-4">
            <h5>Website developed by</h5>
            <p>
              Shardul Bramhanathkar
            </p>
            <p>
              Ashutosh Bhate
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Define AttendancePage component outside of DashboardPage component
const AttendancePage = () => {
  // Dummy data for student attendance
  const studentAttendance = [
    { rollNumber: '001', name: 'PBL Student 1', timeIn: '08:00 AM', timeOut: '04:00 PM' },
    { rollNumber: '002', name: 'PBL Student 2', timeIn: '08:15 AM', timeOut: '04:30 PM' },
    // Add more student data as needed
  ];

  return (
    <div className="container mt-4 mb-5"> {/* Added more margin-bottom */}
      <h2 className="mb-4">Student Attendance</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Time In</th>
            <th>Time Out</th>
          </tr>
        </thead>
        <tbody>
          {studentAttendance.map((student, index) => (
            <tr key={index}>
              <td>{student.rollNumber}</td>
              <td>{student.name}</td>
              <td>{student.timeIn}</td>
              <td>{student.timeOut}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <AttendancePage />
      <Footer />
    </>
  );
};

export default DashboardPage;
