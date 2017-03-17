import React from 'react';

import { Link } from 'react-router-dom';
import CharacterSearch from './CharacterSearchContainer';
import CharacterSort from './CharacterSortContainer';

import './CharacterList.css';

// TODO: reduce redraw
const CharacterList = ({ characters }) => (
  <div className="character-list">
    <CharacterSearch />
    <CharacterSort />
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <small>{character.score}</small>
          <Link to={`/${character.id}`}>
            <h1>{character.name}</h1>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default CharacterList;
