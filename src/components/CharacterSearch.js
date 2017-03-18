import React from 'react';
import { Input } from 'semantic-ui-react';

const CharacterSearch = ({ value, onChange }) => {
  return (
    <div>
      <Input
        fluid
        size="big"
        type="search"
        placeholder="Search..."
        icon="search"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </div>
  );
};

export default CharacterSearch;
