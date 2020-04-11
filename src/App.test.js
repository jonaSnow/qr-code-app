import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Survey from './components/Survey';

test('Title Poster 1 Appears', () => {
  const { getByText } = render(<Survey />);
  const posterName = getByText(/Poster 1/i);
  expect(posterName).toBeInTheDocument();
});

test('Survey Snapshot Test', () => {
  const survey = renderer.create(<Survey />).toJSON();
  expect(survey).toMatchSnapshot();
});
