import React, { Component } from 'react';

class Mouse extends Component {
  render() {
    return (
      <div>

        <span className="Draggable Mouse" role="img" aria-label="mouse" >🐭</span>
        <span>{`(${Math.floor(this.props.x)}, ${Math.floor(this.props.y)})`}</span>
      </div>
    );
  }
}

export default Mouse;