import React from 'react';
import { render } from '@testing-library/react';
import Survey from './components/Survey';

test('renders Poster 1', () => {
  const { getByText } = render(<Survey />);
  const posterName = getByText(/Poster 1/i);
  expect(posterName).toBeInTheDocument();
});
