import React, { useState } from 'react';
import UserList from './componants/UserList';
import AddUserForm from './componants/AddUserForm';
import "./App.css"

const App = () => {
  const initialUsers = JSON.parse(localStorage.getItem('users')) || [
    { id: 1, name: 'User 1', rating: 3 },
    { id: 2, name: 'User 2', rating: 5 },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleStarClick = (userId, starsSelected) => {
    const updatedUsers = users.map((user) =>
      user.id === userId ? { ...user, rating: starsSelected } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  const handleSortingChange = (sortedList) => {
    setUsers([...sortedList]);
    localStorage.setItem('users', JSON.stringify(sortedList));
  };

  const handleAddUser = (userName) => {
    const newUserId = users.length + 1;
    const newUser = { id: newUserId, name: userName, rating: 0 };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('users', JSON.stringify(updatedUsers));
  };

  return (
    <div>
      <h1>User Ratings</h1>
      <UserList users={users} onSortingChange={handleSortingChange} onStarClick={handleStarClick} />
      <AddUserForm onAddUser={handleAddUser} />
    </div>
  );
};

export default App;
