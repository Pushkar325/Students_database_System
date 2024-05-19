import React, { useState } from "react";

const StudentEditScreen = ({ student, onEdit }) => {
  const [name, setName] = useState(student.name);
  const [branch, setBranch] = useState(student.branch);
  const [address, setAddress] = useState(student.address);

  const handleEdit = () => {
    onEdit({ ...student, name, branch, address });
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <p>ID: {student.id}</p>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>Branch:</label>
      <input
        type="text"
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />
      <label>Address:</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleEdit}>Save</button>
    </div>
  );
};

export default StudentEditScreen;
