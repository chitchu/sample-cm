import React from 'react';

const CharacterSearch = ({ value, onChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Filter..."
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};

export default CharacterSearch;
