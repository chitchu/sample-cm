import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './ducks';
import Root from './components/RootContainer';

class App extends Component {
  state = { characters: [] };
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Root} />
        </Router>
      </Provider>
    );
  }
}

export default App;
