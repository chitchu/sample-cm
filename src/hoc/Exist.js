import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Exist = WrappedComponent => class Exist extends Component {
  componentDidMount() {
  }
  render() {
    return this.props.characterId ? <WrappedComponent {...this.props} /> : <div>
        <h1>Character doesn't exists.</h1>
        <Link to="/">
          Go back to home
        </Link>
      </div>;
  }
};

export default Exist;
