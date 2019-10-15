import React, { Component } from 'react';

class Cat extends Component {
  render() {
    return (
      <div>
        <span className="Draggable Cat" role="img" aria-label="cat" >😼</span>
        <span>{`(${Math.floor(this.props.x)}, ${Math.floor(this.props.y)})`}</span>
      </div>
    );
  }
}

export default Cat;