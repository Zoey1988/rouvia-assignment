import React, { useEffect, useState } from 'react';
import SearchBox from './components/SearchBox';
import UserInfo from './components/UserInfo';

import { getRequestAPI } from './services';

import type { User } from './types';

const API_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    searchUser('zoey1988');
  }, []);

  return (
    <div className="container">
      <SearchBox handleSearch={searchUser} />
      {loading ? (
        'Searching...'
      ) : user ? (
        <UserInfo user={user} />
      ) : (
        'No User Found.'
      )}
    </div>
  );
}

export default App;
