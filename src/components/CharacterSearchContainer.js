import { connect } from 'react-redux';

import CharacterSearch from './CharacterSearch';
import { filter } from '../ducks';

const mapState = ({ content: { filterString } }) => ({ value: filterString });

const mapDispatch = dispatch => ({
  onChange: query => dispatch(filter(query))
});

export default connect(mapState, mapDispatch)(CharacterSearch);
