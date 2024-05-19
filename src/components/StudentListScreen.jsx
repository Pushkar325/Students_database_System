import React from "react";

const StudentListScreen = ({ students, onSelectStudent, onDelete }) => {
  return (
    <div>
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} onClick={() => onSelectStudent(student)}>
            {student.name} - {student.branch} - {student.address}
            <button
              className="sumbit-button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(student.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentListScreen;
