import React, { useState, useEffect } from 'react';
import StarRating from './StarRating';

const UserList = ({ users, onSortingChange, onStarClick }) => {
  const [sortedUsers, setSortedUsers] = useState([...users]);

  const handleSortingChange = (event) => {
    const sortingValue = event.target.value;
    let sortedList = [];

    if (sortingValue === 'highest') {
      sortedList = [...users].sort((a, b) => b.rating - a.rating);
    } else {
      sortedList = [...users].sort((a, b) => a.rating - b.rating);
    }

    setSortedUsers(sortedList);
    onSortingChange(sortedList);
  };

  useEffect(() => {
    setSortedUsers([...users]);
  }, [users]);

  return (
    <div>
      <select onChange={handleSortingChange}>
        <option value="highest">Highest rating first</option>
        <option value="lowest">Lowest rating first</option>
      </select>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.rating}
            <div>
              <StarRating
                starsSelected={user.rating}
                onStarClick={(stars) => onStarClick(user.id, stars)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
