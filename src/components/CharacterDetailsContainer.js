import { connect } from 'react-redux';
import Exist from '../hoc/Exist';
import CharacterDetails from './CharacterDetails';

import { updatePerson, populatePerson } from '../ducks';

const mapState = (
  { content: { entities } },
  { match: { params: { characterId } } }
) => ({
  ...entities[window.encodeURI(characterId)],
  characterId: window.encodeURI(characterId)
});

const mapDispatch = dispatch => ({
  onChange: (value, characterId, prop) => {
    dispatch(updatePerson({ value, characterId, prop }));
  },
  onPopulatePerson: (characterId, targetProp, url) => {
    dispatch(populatePerson(characterId, targetProp, url));
  }
});

export default connect(mapState, mapDispatch)(Exist(CharacterDetails));
