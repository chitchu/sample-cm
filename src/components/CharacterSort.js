import React from 'react';

const CharacterSort = (
  { sortingOptions, orderOptions, sortBy, order, onUpdateSort }
) =>
  {
    return (
      <div className="character-sort">
        <select
          value={sortBy}
          onChange={evt => onUpdateSort(evt.target.value, order)}
        >
          {sortingOptions.map(({ value, label }, key) => (
            <option key={key} value={value}>{label}</option>
          ))}
        </select>
        <select
          value={order}
          onChange={evt => onUpdateSort(sortBy, evt.target.value)}
        >
          {orderOptions.map(({ value, label }, key) => (
            <option key={key} value={value}>{label}</option>
          ))}
        </select>
      </div>
    );
  };

export default CharacterSort;
