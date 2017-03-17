import { connect } from 'react-redux';
import { loadCurrentPage } from '../ducks';

import Root from './Root';

const mapState = ({ ui: { charactersLoaded } }) => ({
  isLoaded: charactersLoaded
});

const mapDispatch = dispatch => ({
  onLoadContent: () => dispatch(loadCurrentPage())
});
export default connect(mapState, mapDispatch)(Root);
