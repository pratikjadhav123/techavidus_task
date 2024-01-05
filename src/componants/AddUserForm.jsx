import React, { useState } from 'react';
import "./AddUserForm.css";

const AddUserForm = ({ onAddUser }) => {
  const [userName, setUserName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName.trim() !== '') {
      onAddUser(userName.trim());
      setUserName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button type="submit">Save</button>
    </form>
  );
};

export default AddUserForm;
