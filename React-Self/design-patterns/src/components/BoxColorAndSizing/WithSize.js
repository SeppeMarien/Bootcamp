import React from 'react';

const withSize = (WrapperComponent, size) => {
  const WithSize = (props) => {
    return <WrapperComponent {...props} size={size} />;
  };
  return WithSize;
};

export default withSize;