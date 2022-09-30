import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBox from '.';

const mockHnadleSearch = jest.fn();

const INPUT_PLACEHOLDER = 'Search GitHub username...';

beforeEach(() => {
  render(<SearchBox handleSearch={mockHnadleSearch} />);
});

test('render form properly', () => {
  const submitButton = screen.getByRole('button');
  const searchInput = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
  expect(submitButton).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
});

test('form submition works', () => {
  const submitButton = screen.getByRole('button');
  const searchInput = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
  fireEvent.change(searchInput, {
    target: { value: 'alimo' },
  });

  fireEvent.click(submitButton);
  expect(mockHnadleSearch.mock.calls.length).toBe(1);
});
