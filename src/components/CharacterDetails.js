import React from 'react';

import upvoteIcon from '../images/upvote.svg';
import downvoteIcon from '../images/downvote.svg';
import CharacterProperty from './CharacterProperty';
import Exist from '../hoc/Exist';

import './CharacterDetails.css';

const CharacterDetails = (
  {
    name,
    gender,
    skin_color,
    birth_year,
    hair_color,
    eye_color,
    height,
    mass,
    note,
    characterId,
    score,
    species,
    speciesResolved,
    starships,
    starshipsResolved,
    homeworldResolved,
    films,
    filmsResolved,
    onChange,
    onPopulatePerson
  }
) =>
  {
    return (
      <div className="character-details">
        <div className="intro">
          <div className="voting-box">
            <button onClick={evt => onChange((++score), characterId, 'score')}>
              <img src={upvoteIcon} alt="Up vote" />
            </button>
            <div className="score">
              {score}
            </div>
            <button onClick={evt => onChange((--score), characterId, 'score')}>
              <img src={downvoteIcon} alt="Down vote" />
            </button>
          </div>
          <h1>{name}</h1>
        </div>
        <hr />
        <div>
          <p>Height: {height}</p>
          <p>Mass: {mass}</p>
          <p>Hair color: {hair_color}</p>
          <p>Skin color: {skin_color}</p>
          <p>Gender: {gender}</p>
          <p>Eye color: {eye_color}</p>
          <p>Birth year: {birth_year}</p>
          <p>
            Homeworld: {homeworldResolved}
          </p>
          <p>
            Films: <CharacterProperty
              onPopulatePerson={() => {
                onPopulatePerson(characterId, 'filmsResolved', films);
              }}
              characterId={characterId}
              prop={films}
              resolved={filmsResolved}
            />
          </p>
          <p>
            Species: <CharacterProperty
              onPopulatePerson={() => {
                onPopulatePerson(characterId, 'speciesResolved', species);
              }}
              characterId={characterId}
              prop={species}
              resolved={speciesResolved}
            />
          </p>
          <p>
            Starships: <CharacterProperty
              onPopulatePerson={() => {
                onPopulatePerson(characterId, 'starshipsResolved', starships);
              }}
              characterId={characterId}
              prop={starships}
              resolved={starshipsResolved}
            />
          </p>
        </div>
        <hr />
        <label htmlFor="notes">Notes</label>
        <textarea
          id="notes"
          value={note}
          onChange={evt => onChange(evt.target.value, characterId, 'note')}
        />
      </div>
    );
  };

export default Exist(CharacterDetails);
