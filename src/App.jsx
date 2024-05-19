import React, { useState } from "react";
import "./App.css";
import StudentListScreen from "./components/StudentListScreen";
import StudentDetailScreen from "./components/StudentDetailScreen";
import StudentEditScreen from "./components/StudentEditScreen ";
import AddStudent from "./components/AddStudent ";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEditScreen, setIsEditScreen] = useState(false);

  // Function to count students
  const countStudents = () => students.length;

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  const handleEditStudent = (editedStudent) => {
    const updatedStudents = students.map((student) =>
      student.id === editedStudent.id ? editedStudent : student
    );
    setStudents(updatedStudents);
    setSelectedStudent(editedStudent);
    setIsEditScreen(false);
  };

  const handleDeleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
    setSelectedStudent(null);
  };

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleEditButtonClick = () => {
    setIsEditScreen(true);
  };

  return (
    <div>
      <h2 className="Total_Students">Total Students: {countStudents()}</h2>
      {!selectedStudent && !isEditScreen && (
        <StudentListScreen
          students={students}
          onSelectStudent={handleSelectStudent}
          onDelete={handleDeleteStudent}
        />
      )}
      {selectedStudent && !isEditScreen && (
        <div>
          <StudentDetailScreen student={selectedStudent} />
          <button onClick={handleEditButtonClick}>Edit</button>
        </div>
      )}
      {selectedStudent && isEditScreen && (
        <StudentEditScreen
          student={selectedStudent}
          onEdit={handleEditStudent}
        />
      )}
      <AddStudent onAdd={handleAddStudent} />
    </div>
  );
};

export default App;
