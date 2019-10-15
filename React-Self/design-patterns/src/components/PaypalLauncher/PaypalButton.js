import React from 'react';

const PayPalButton = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
}

export default PayPalButton;