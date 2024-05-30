import React, { useState } from 'react';

const PatientRecord = ({ patient, onUpdate }) => {
  const [editing, setEditing] = useState(false);
  const [editedPatient, setEditedPatient] = useState({ ...patient });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedPatient((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    // Save edited patient to local storage
    localStorage.setItem('editedPatient', JSON.stringify(editedPatient));
    onUpdate(editedPatient);
    setEditing(false);
  };

  return (
    <div className="container">
      {editing ? (
        <div className="row">
          <div className="col-md-6">
            <input type="text" className="form-control mb-3" name="name" value={editedPatient.name} onChange={handleChange} />
            <input type="number" className="form-control mb-3" name="age" value={editedPatient.age} onChange={handleChange} />
            <select className="form-select mb-3" name="gender" value={editedPatient.gender} onChange={handleChange}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="trans">Trans</option>
            </select>
            {/* Add more fields here */}
            <button className="btn btn-primary" onClick={saveChanges}>Save</button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-6">
            <p>Patient ID: {patient._id}</p>
            <p>Name: {patient.name}</p>
            <p>Age: {patient.age}</p>
            <p>Gender: {patient.gender}</p>
            {/* Display other fields */}
            <button className="btn btn-primary" onClick={() => setEditing(true)}>Edit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PatientRecord;
