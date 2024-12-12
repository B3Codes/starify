import { useContext } from 'react';
import { StarRatingContext } from '../context/StarRatingContext';

export const useStarRating = () => {
  const context = useContext(StarRatingContext);

  if (!context) {
    throw new Error('useStarRating must be used within a StarRatingProvider');
  }

  return context;
};