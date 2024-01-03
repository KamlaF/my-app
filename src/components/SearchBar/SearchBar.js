import React from 'react';
import './SearchBar.scss';

const SearchBar = ({ onSearchTermChange }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={(e) => onSearchTermChange(e.target.value)}
        placeholder="Search products..."
      />
    </div>
  );
};

export default SearchBar;

