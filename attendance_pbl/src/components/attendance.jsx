import React from 'react';
import Navigation from './common/Navigation';
import Header from './common/Header';
import Footer from './common/Footer';
import "./managestudents.css"; 
const Attendance = () => {
  // Dummy data for student attendance
  const studentAttendance = [
    { rollNumber: '1', name: 'PBL Student 1', timeIn: '08:00 AM', timeOut: '04:00 PM' },
    { rollNumber: '2', name: 'PBL Student 2', timeIn: '08:15 AM', timeOut: '04:30 PM' },
    // Add more student data as needed
  ];

  return (
    <>
      <Header />
      <Navigation />
      <div className="attendancepage">
        <div className="attendancepageheader">
          <h2>Attendance Monitor</h2>
        </div>
        </div>

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
        <Footer />
      </>

      );
};


      export default Attendance; // Exporting the Attendance component as default
