import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from './common/Navigation';
import Header from './common/Header';
import Footer from './common/Footer';
import "./managestudents.css"; // Import external CSS file

function ManageStudents() {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3001/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const addStudent = async () => {
    if (studentName.trim() !== "") {
      try {
        await axios.post("http://localhost:3001/students", { name: studentName });
        fetchStudents();
        setStudentName("");
      } catch (error) {
        console.error("Error adding student:", error);
      }
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="manage-students-container">
        <div className="manage-students-header">
          <h2>Manage Students</h2>
        </div>

        <div className="add-student">
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter student name"
          />
          <button onClick={addStudent}>Add Student</button>
        </div>

        <div className="student-list">
          <h3>Student List</h3>
          <ul>
            {students.map((student) => (
              <li key={student.id}>
                <span className="student-id">ID: {student.id}</span>
                <span className="student-name">{student.name}</span>
                <div className="delete-button-container">
                  <button className="delete-button" onClick={() => deleteStudent(student.id)}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ManageStudents;
