import React from 'react';

const withName = (WrappedComponent) => {
  const WithName = (props) => {
    return <WrappedComponent {...props} name="React" />;
  }
  return WithName;
}

export default withName;