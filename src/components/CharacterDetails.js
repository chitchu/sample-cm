import React from 'react';

import upvoteIcon from '../images/upvote.svg';
import downvoteIcon from '../images/downvote.svg';

import './CharacterDetails.css';

const CharacterDetails = (
  {
    name,
    gender,
    skin_color,
    birth_year,
    hair_color,
    height,
    mass,
    note,
    characterId,
    score,
    onChange
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
        <p>Gender: {gender}</p>
        <p>Skin color: {skin_color}</p>
        <p>Birth year: {birth_year}</p>
        <p>Hair color: {hair_color}</p>
        <p>Height: {height}</p>
        <p>Mass: {mass}</p>
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

export default CharacterDetails;
