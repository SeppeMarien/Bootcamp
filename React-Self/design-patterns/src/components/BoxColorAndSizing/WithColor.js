import React from 'react';

const withColor = (WrapperComponent, color) => {
  const withColor = (props) => {
    return <WrapperComponent {...props} color={color} />;

  };
  return withColor
};

export default withColor;