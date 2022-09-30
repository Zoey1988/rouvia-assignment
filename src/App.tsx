import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import SearchBox from './components/SearchBox';
import UserInfo from './components/UserInfo';

import { getRequestAPI } from './services';

import type { User } from './types';

import moonIcon from './assets/icon-moon.svg';
import sunIcon from './assets/icon-sun.svg';

import './App.scss';

const API_URL = 'https://api.github.com/users/';

function App() {
  const [theme, setTheme] = useState('dark');
  const [searchText, setSearchText] = useState('zoey1988');

  const getUser = async () => {
    return await getRequestAPI<User>(`${API_URL}${searchText}`);
  };

  const { data: user, isLoading } = useQuery(
    ['github-user', searchText],
    getUser
  );

  const themeIcon = theme === 'light' ? moonIcon : sunIcon;

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && ['light', 'dark'].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  return (
    <div className={`app ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container">
        <div className="container-header">
          <h1>Dev Finder</h1>
          <button className="theme-button" onClick={() => changeTheme()}>
            <img src={themeIcon} />
          </button>
        </div>

        <SearchBox handleSearch={setSearchText} />

        {isLoading ? (
          'Searching...'
        ) : user ? (
          <UserInfo user={user} />
        ) : (
          'No User Found.'
        )}
      </div>
    </div>
  );
}

export default App;
