import React from 'react';
import { string, node, bool } from 'prop-types';

const sizes = {
  large: 'btn-lg',
  small: 'btn-sm',
  default: '',
};

const ButtonComp = ({ styleType, size, type, classNames, children, disabled }) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={type} className={`${styleType} ${sizes[size] || ''} ${classNames}`}>
      Click me {children}
    </button>
  );
};

ButtonComp.propTypes = {
  styleType: string,
  size: string,
  type: string,
  classNames: string,
  children: node,
  disabled: bool,
};

ButtonComp.defaultProps = {
  styleType: 'primary',
  size: 'default',
  type: 'button',
  classNames: '',
};

export default ButtonComp;
