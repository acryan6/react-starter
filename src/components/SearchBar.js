import React from 'react';

const SearchBar = ( {inputChange}) => (
  <form id='searchBar'>
    <input
      type="text"
      placeholder="Looking for a movie...?"
      onChange={()=>{ inputChange(document.getElementById('searchBar')[0].value) }}
    />
    <button type="submit">Search</button>
  </form>
)

export default SearchBar;
