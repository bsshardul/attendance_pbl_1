import React, { useState, useEffect } from 'react';
import Navigation from './common/Navigation';
import Header from './common/Header';
import Footer from './common/Footer';
import { format } from 'date-fns';

const Attendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch('http://localhost:3001/attendance');
      if (!response.ok) {
        throw new Error('Failed to fetch attendance data');
      }
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="attendancepage">
        <div className="attendancepageheader">
          <h2>Attendance Monitor</h2>
        </div>
      </div>

      <div className="container mt-4 mb-5">
        <h2 className="mb-4">Student Attendance</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Tag ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((attendance, index) => (
              <tr key={index}>
                <td>{attendance.id}</td>
                <td>{attendance.roll_number}</td>
                <td>{attendance.name}</td>
                <td>{attendance.tag_id}</td>
                {/* Format the timestamp using date-fns */}
                <td>{format(new Date(attendance.timestamp), 'yyyy-MM-dd HH:mm:ss')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Attendance;
