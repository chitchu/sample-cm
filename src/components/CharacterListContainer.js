import CharacterList from '../components/CharacterList';
import { populatePerson, loadMore } from '../ducks';

import { connect } from 'react-redux';

const mapState = (
  {
    ui: { charactersLoaded },
    content: { entities, filterString, filteredKeys },
    api: { next }
  }
) => ({
  characters: filteredKeys.map(key => ({
    name: entities[key].name,
    id: key,
    score: entities[key].score,
    homeworld: entities[key].homeworld,
    homeworldResolved: entities[key].homeworldResolved
  })),
  hasNext: !!next
});

const mapDispatch = dispatch => ({
  onPopulatePerson: (characterId, targetProp, url) => {
    dispatch(populatePerson(characterId, targetProp, url));
  },
  onLoadMore: () => {
    dispatch(loadMore());
  }
});

export default connect(mapState, mapDispatch)(CharacterList);
