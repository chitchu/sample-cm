import React from 'react';

const CharacterSearch = ({ value, onChange }) => {
  return (
    <input
      type="search"
      placeholder="Filter..."
      value={value}
      onChange={evt => onChange(evt.target.value)}
    />
  );
};

export default CharacterSearch;
