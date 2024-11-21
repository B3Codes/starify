import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Star from './Star';
import { StarRatingProvider } from '../context/StarRatingContext';

describe('Star Component', () => {
  test('renders with default properties', () => {
    const { getByLabelText } = render(
      <StarRatingProvider totalStars={5}>
        <Star star={1} />
      </StarRatingProvider>
    );

    const star = getByLabelText('Rate 1 out of 5');
    expect(star).toBeInTheDocument();
    expect(star).toHaveStyle('color: gray');
  });

  test('updates color on hover', () => {
    const { getByLabelText } = render(
      <StarRatingProvider totalStars={5}>
        <Star star={1} />
      </StarRatingProvider>
    );

    const star = getByLabelText('Rate 1 out of 5');
    fireEvent.mouseEnter(star);
    expect(star).toHaveStyle('color: gold');
  });
});
