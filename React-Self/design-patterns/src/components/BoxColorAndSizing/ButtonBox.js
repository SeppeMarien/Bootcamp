import React, { Component } from 'react';

class ButtonBox extends Component {
  render() {
    const {size, color} = this.props
    const butttonStyle = {
      height: size,
      width: size,
      backgroundColor: color
    }
    return (
      <button style={{backgroundColor: color, height: size, width: size}}>{`${color} button ${size}`}</button>
    );
  }
}

export default ButtonBox;