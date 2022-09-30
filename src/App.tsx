import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import UserInfo from './components/UserInfo';

import { getRequestAPI } from './services';

import type { User } from './types';

import moonIcon from './assets/icon-moon.svg';
import sunIcon from './assets/icon-sun.svg';

import './App.scss';

const API_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState('dark');

  //TODO: use react query for same queries
  const searchUser = async (searchText: string) => {
    setLoading(true);
    try {
      const result = await getRequestAPI<User>(`${API_URL}${searchText}`);
      setUser(result);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const themeIcon = theme === 'light' ? moonIcon : sunIcon;

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    searchUser('zoey1988');

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

        <SearchBox handleSearch={searchUser} />

        {loading ? (
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
