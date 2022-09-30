import { ChangeEvent, FormEvent, useState } from 'react';

import './index.scss';

import SearchIcon from '../../assets/icon-search.svg';

type PropTypes = {
  handleSearch: (txt: string) => void;
};

function SearchBox({ handleSearch }: PropTypes) {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.currentTarget.value);
  };

  const handleSubmitSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchText) {
      return;
    }
    handleSearch(searchText);
    setSearchText('');
  };

  return (
    <form
      className="search-box-form"
      onSubmit={event => handleSubmitSearch(event)}
    >
      <img src={SearchIcon} className="search-box-form__icon" />
      <input
        value={searchText}
        placeholder="Search GitHub username..."
        className="search-box-form__input"
        onChange={event => handleSearchChange(event)}
      />
      <button
        type="submit"
        disabled={!searchText}
        className="search-box-form__button"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
