import React from 'react';
import { Route } from 'react-router-dom';

import Loader from '../hoc/Loader';

import CharacterList from './CharacterListContainer';
import CharacterDetails from './CharacterDetailsContainer';

const Root = () => {
  return (
    <div className="container">
      <CharacterList />
      <Route path="/:characterId" component={CharacterDetails} />
    </div>
  );
};

export default Loader(Root);
