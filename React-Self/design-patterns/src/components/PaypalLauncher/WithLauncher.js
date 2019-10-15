import React, { Component } from 'react';


const withLauncher = (WrappedComponent, text) => {
  return class WithLauncher extends Component {

    launchPayPal = () => {
      alert('Pay with payPal');
    }


    render() {
      return <WrappedComponent {...this.props} text={text} onClick={e => this.launchPayPal()}  /> ;  
    }
  }
}


export default withLauncher;