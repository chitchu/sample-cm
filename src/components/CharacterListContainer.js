import CharacterList from '../components/CharacterList';

import { connect } from 'react-redux';

const mapState = (
  {
    ui: { charactersLoaded },
    content: { entities, filterString, filteredKeys }
  }
) => ({
  characters: filteredKeys.map(key => ({
    name: entities[key].name,
    id: key,
    score: entities[key].score
  }))
});

export default connect(mapState)(CharacterList);
