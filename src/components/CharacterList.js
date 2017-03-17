import React from 'react';

import { Link } from 'react-router-dom';
import CharacterSearch from './CharacterSearchContainer';
import CharacterSort from './CharacterSortContainer';
import CharacterProperty from './CharacterProperty';

import './CharacterList.css';

// TODO: reduce redraw
const CharacterList = (
  { characters, hasNext, onPopulatePerson, onLoadMore }
) => (
  <div className="character-list">
    <CharacterSearch />
    <CharacterSort />
    <ul>
      {characters.map((character, index) => (
        <li key={index}>
          <div className="name">
            <Link to={`/${character.id}`}>
              <h1>{character.name}</h1>
            </Link>
            <small>{character.score}</small>
            <small>•</small>
            <CharacterProperty
              onPopulatePerson={() => {
                onPopulatePerson(
                  character.id,
                  'homeworldResolved',
                  character.homeworld
                );
              }}
              characterId={character.id}
              prop={character.homeworld}
              resolved={character.homeworldResolved}
            />
          </div>
        </li>
      ))}
    </ul>
    {hasNext ? <button onClick={onLoadMore}>More</button> : ''}
  </div>
);

export default CharacterList;
