import { connect } from 'react-redux';

import { sort } from '../ducks';

import CharacterSort from './CharacterSort';

const mapState = (
  { ui: { sortingOptions, orderOptions }, content: { sortBy, order } }
) => ({ sortingOptions, orderOptions, sortBy, order });

const mapDispatch = dispatch => ({
  onUpdateSort: (sortBy, order) => {
    dispatch(sort({ sortBy, order }));
  }
});

export default connect(mapState, mapDispatch)(CharacterSort);
