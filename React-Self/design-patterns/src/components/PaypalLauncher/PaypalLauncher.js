import React, { Component } from 'react';

class PayPalLauncher extends Component {
  launchPayPal = () => {
    alert('Pay with payPal');
  }

  render() {
    return this.props.render(this.launchPayPal);
  }
}

export default PayPalLauncher;