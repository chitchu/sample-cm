import React from 'react';
import { Image } from 'semantic-ui-react';

const CharacterPhoto = ({ photo }) => {
  return <div style={{ backgroundImage: `url(${photo})` }} />;
};

export default CharacterPhoto;
