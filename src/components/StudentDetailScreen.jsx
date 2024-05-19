import React from "react";

const StudentDetailScreen = ({ student }) => {
  return (
    <div>
      <h2>Student Details</h2>
      <p>ID: {student.id.substr(0, 6)}</p>
      <p>Name: {student.name}</p>
      <p>Branch: {student.branch}</p>
      <p>Address: {student.address}</p>
      <p>Admission Year: {student.admissionYear}</p>
    </div>
  );
};

export default StudentDetailScreen;
