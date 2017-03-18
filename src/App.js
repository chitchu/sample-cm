import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'semantic-ui-react';

import store from './ducks';
import Root from './components/RootContainer';
import CharacterDetails from './components/CharacterDetailsContainer';

class App extends Component {
  state = { characters: [] };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path="/" component={Root} />
            <Route path="/:characterId" component={CharacterDetails} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
