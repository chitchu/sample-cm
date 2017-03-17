import React from 'react';
import './characterSort.css';

const CharacterSort = (
  { sortingOptions, orderOptions, sortBy, order, onUpdateSort }
) =>
  {
    return (
      <div className="character-sort">
        <small>Sort by:</small>
        <div>
          <select
            value={sortBy}
            onChange={evt => onUpdateSort(evt.target.value, order)}
          >
            {sortingOptions.map(({ value, label }, key) => (
              <option key={key} value={value}>{label}</option>
            ))}
          </select>
        </div>
        <div>
          <select
            value={order}
            onChange={evt => onUpdateSort(sortBy, evt.target.value)}
          >
            {orderOptions.map(({ value, label }, key) => (
              <option key={key} value={value}>{label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  };

export default CharacterSort;
