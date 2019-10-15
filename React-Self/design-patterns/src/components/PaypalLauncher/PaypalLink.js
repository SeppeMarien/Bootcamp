import React from 'react';

const PayPalLink = (props) => {
  return <a onClick={props.onClick}>{props.text}</a>;
}

export default PayPalLink;