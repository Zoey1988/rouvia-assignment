import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import UserInfo from '.';

const mockedUser = {
  login: 'Zoey1988',
  avatar_url: 'https://avatars.githubusercontent.com/u/35141243?v=4',
  html_url: 'https://github.com/Zoey1988',
  name: 'Zeinab Rezaee',
  company: 'Yektanet',
  blog: '',
  location: 'Tehran',
  bio: 'Front End Web Developer',
  twitter_username: '',
  public_repos: 14,
  followers: 7,
  following: 3,
  created_at: '2018-01-05T14:06:11Z',
};

beforeEach(() => {
  render(<UserInfo user={mockedUser} />);
});

test('shows name of user', () => {
  const name = screen.getByText('Zeinab Rezaee');
  const username = screen.getByText('@Zoey1988');
  expect(name).toBeInTheDocument();
  expect(username).toBeInTheDocument();
});
