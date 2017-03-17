import React, { Component } from 'react';

import './Loader.css';

//https://codepen.io/lukasoe/pen/MJVxpN
const LoadingAnimation = () => (
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 35 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
    <div className="loader">
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
);

const Loader = WrappedComponent => {
  return class Loader extends Component {
    componentDidMount() {
      if (!this.props.isLoaded) {
        this.props.onLoadContent();
      }
    }

    render() {
      return this.props.isLoaded
        ? <WrappedComponent {...this.props} />
        : <LoadingAnimation />;
    }
  };
};

export default Loader;
