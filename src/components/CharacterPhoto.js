import React from 'react';

const CharacterPhoto = ({ photo }) => {
  return <div style={{ backgroundImage: `url(${photo})` }} />;
};

export default CharacterPhoto;
