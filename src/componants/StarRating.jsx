import React from 'react';
import './StarRating.css';

const StarRating = ({ starsSelected, onStarClick }) => {
  const totalStars = 5;

  const handleClick = (selectedStar) => {
    onStarClick(selectedStar);
  };

  return (
    <div>
      {[...Array(totalStars)].map((_, index) => (
        <span
          key={index}
          onClick={() => handleClick(index + 1)}
          style={{ cursor: 'pointer', color: index < starsSelected ? 'gold' : 'gray' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
