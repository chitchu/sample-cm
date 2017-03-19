import React, { Component } from 'react';
import defaultPhoto from '../images/default.jpg';

const PhotoLoader = WrappedComponent => class PhotoLoader extends Component {
  componentDidMount() {
    if (!this.props.photo) {
      this.props.onLoadPhoto();
    }
  }
  render() {
    return (
      <WrappedComponent
        {...{
          ...this.props,
          photo: this.props.photo ? this.props.photo : defaultPhoto
        }}
      />
    );
  }
};

export default PhotoLoader;
