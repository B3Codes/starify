import React from 'react';
import { renderHook, act } from '@testing-library/react';
import { StarRatingProvider } from './StarRatingContext';
import { useStarRating } from '../hooks/useStarRating';

describe('StarRatingContext', () => {
  test('updates rating state', () => {
    const wrapper = ({ children }) => <StarRatingProvider>{children}</StarRatingProvider>;

    const { result } = renderHook(() => useStarRating(), { wrapper });

    act(() => {
      result.current.setRating(3);
    });

    expect(result.current.rating).toBe(3);
  });

  test('throws error when used outside provider', () => {
    expect(() => renderHook(() => useStarRating())).toThrow(
      'useStarRating must be used within a StarRatingProvider'
    );
  });
});