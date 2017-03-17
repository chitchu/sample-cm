import React, { Component } from 'react';

const InlineLoader = WrappedComponent => {
  return class InlineLoader extends Component {
    componentDidUpdate() {
      if (!this.props.resolved) {
        this.props.onPopulatePerson();
      }
    }
    componentDidMount() {
      if (!this.props.resolved) {
        this.props.onPopulatePerson();
      }
    }
    render() {
      const { resolved, prop } = this.props;
      const isZeroLengthArray = prop instanceof Array && !prop.length;
      return resolved || isZeroLengthArray
        ? <WrappedComponent
          {...{
            ...this.props,
            resolved: isZeroLengthArray ? 'Nothing' : resolved
          }}
        />
        : <small>loading...</small>;
    }
  };
};

export default InlineLoader;
