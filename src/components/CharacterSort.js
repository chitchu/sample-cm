import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import './characterSort.css';

const CharacterSort = (
  { sortingOptions, orderOptions, sortBy, order, onUpdateSort }
) =>
  {
    return (
      <div className="character-sort">
        <small>Sort by:</small>
        <div>
          <Dropdown
            value={sortBy}
            onChange={(evt, { value }) => onUpdateSort(value, order)}
            options={sortingOptions.map(({ value, label }) => ({
              text: label,
              value
            }))}
          />
        </div>
        <div>
          <Dropdown
            value={order}
            onChange={(evt, { value }) => onUpdateSort(sortBy, value)}
            options={orderOptions.map(({ value, label }) => ({
              text: label,
              value
            }))}
          />
        </div>
      </div>
    );
  };

export default CharacterSort;
