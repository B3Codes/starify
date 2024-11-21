import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const StarRatingContext = createContext();

export const StarRatingProvider = ({ totalStars = 5, children }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleKeyDown = (event, star) => {
    if (event.key === 'Enter') {
      setRating(star);
    } else if (event.key === 'ArrowRight' && star < totalStars) {
      setHover(star + 1);
    } else if (event.key === 'ArrowLeft' && star > 1) {
      setHover(star - 1);
    }
  };

  return (
    <StarRatingContext.Provider value={{ rating, hover, setRating, setHover, handleKeyDown, totalStars }}>
      {children}
    </StarRatingContext.Provider>
  );
};

StarRatingProvider.propTypes = {
  totalStars: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export { StarRatingContext };
