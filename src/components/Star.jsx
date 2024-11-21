import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useStarRating } from '../hooks/useStarRating';

const Star = memo(({ star, size, filledColor = 'gold', unfilledColor = 'gray', symbol = '★' }) => {
  const { rating, hover, setRating, setHover, handleKeyDown, totalStars } = useStarRating();

  const isFilled = star <= (hover || rating);

  return (
    <span
      className="star"
      role="radio"
      aria-checked={rating === star}
      tabIndex={0}
      onClick={() => setRating(star)}
      onMouseEnter={() => setHover(star)}
      onMouseLeave={() => setHover(0)}
      onKeyDown={(event) => handleKeyDown(event, star)}
      style={{
        cursor: 'pointer',
        fontSize: size,
        color: isFilled ? filledColor : unfilledColor,
      }}
      aria-label={`Rate ${star} out of ${totalStars}`}
    >
      {symbol}
    </span>
  );
});

Star.propTypes = {
  star: PropTypes.number.isRequired,
  size: PropTypes.string,
  filledColor: PropTypes.string,
  unfilledColor: PropTypes.string,
  symbol: PropTypes.string,
};

export default Star;
