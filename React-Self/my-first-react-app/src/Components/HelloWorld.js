import React, { Fragment } from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      // V1 of calling comp with value
      // name: this.props.name

      // V2 of calling comp with value
      name: this.props.children
    }
  }

  _handleChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    const { name } = this.state;

    return (
      <Fragment>
        <h1>Hello {name}!</h1>
        <input type="text" value={name} onChange={(e) => this._handleChange(e)} />
      </Fragment>
    )
  }
}

export default HelloWorld;