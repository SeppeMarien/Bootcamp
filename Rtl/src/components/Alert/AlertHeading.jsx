import React from 'react';
import { node, string } from 'prop-types';

export default function AlertHeading({ children, className }) {
  return (
    <div className="alertHeader">
      <h4 className={`alert-heading ${className}`}>Test</h4>
      {children}
    </div>
  );
}

AlertHeading.propTypes = {
  children: node,
  className: string,
};

AlertHeading.defaultProps = {
  children: '',
  className: '',
};
