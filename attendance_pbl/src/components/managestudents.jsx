import React, { useState } from "react";
import "./managestudents.css";

function ManageStudents() {
  const [studentName, setStudentName] = useState(""); // state for student name
  const [students, setStudents] = useState([
    { id: 1, name: "Shardul Bramhanathkar" },
    { id: 2, name: "Ashutosh Bhate" },
    { id: 3, name: "Krupa Gaikawd" },
    { id: 4, name: "Shruti Bhosale" },
  ]); // state for students

  // Function to handle adding a new student
  const addStudent = () => {
    if (studentName.trim() !== "") {
      // If the student name is not empty
      // Generate a unique ID by incrementing the ID of the last student
      const newStudentId = students.length > 0 ? students[students.length - 1].id + 1 : 1;
      // Create a new student object with the generated ID and the entered name
      const newStudent = { id: newStudentId, name: studentName };
      // Add the new student to the list of students
      setStudents([...students, newStudent]);
      // Clear the input field
      setStudentName("");
    }
  };

  // Function to handle deleting a student by ID
  const deleteStudent = (id) => {
    // Filter out the student with the given ID
    const updatedStudents = students.filter((student) => student.id !== id);
    // Update the list of students
    setStudents(updatedStudents);
  };

  return (
    <div className="manage-students-container">
      <h2>Manage Students</h2>
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
              <button className="delete-button" onClick={() => deleteStudent(student.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ManageStudents;
