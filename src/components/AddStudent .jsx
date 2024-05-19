import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AddStudent = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");

  const handleAdd = () => {
    const id = uuidv4();
    const admissionYear = new Date().getFullYear();
    onAdd({ id, name, branch, address, admissionYear });
    setName("");
    setBranch("");
    setAddress("");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <label className="label_name">Name:</label>
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
      <button className="Add-button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddStudent;
