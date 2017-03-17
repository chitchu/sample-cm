import { connect } from 'react-redux';
import CharacterDetails from './CharacterDetails';
import { updatePerson } from '../ducks';

const mapState = (
  { content: { entities } },
  { match: { params: { characterId } } }
) => ({ ...entities[characterId], characterId });

const mapDispatch = dispatch => ({
  onChange: (value, characterId, prop) => {
    dispatch(updatePerson({ value, characterId, prop }));
  }
});

export default connect(mapState, mapDispatch)(CharacterDetails);
