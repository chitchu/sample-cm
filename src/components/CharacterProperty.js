import React from 'react';

const CharacterProperty = ({ resolved }) => (
  <span>
    {
      resolved.constructor === Array
        ? //make it unique to avoid `droid, droid, droid...`
        resolved
          .filter((item, index, self) => self.indexOf(item) === index)
          .join(', ')
        : resolved
    }
  </span>
);

export default CharacterProperty;
