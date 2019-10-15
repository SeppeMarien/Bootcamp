import React, { Component } from 'react';
import { Draggable } from 'gsap/all';

class RenderDraggable extends Component {

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    }
    
    this.Element = React.createRef();
  }
  componentDidMount() {
    new Draggable(this.Element.current, {onDrag: this._onDrag})
  }
  
  _onDrag = e => {
    const {x, y} = e.target.getBoundingClientRect();
    this.setState({
      x,
      y
    })
  }

  render() {

    const {x, y} = this.state;

    return (
      <div ref={this.Element}>
        {this.props.render(x, y)}
      </div>
    );
  }
}

export default RenderDraggable;