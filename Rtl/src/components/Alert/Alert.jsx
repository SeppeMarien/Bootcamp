import React, { useState } from 'react';
import { node, oneOf, bool } from 'prop-types';
import classNames from 'classnames';

function Alert({ children, dismissible, variant }) {
  const [dismissed, setDismissed] = useState(false);

  const dismiss = () => {
    setTimeout(() => {
      setDismissed(true);
    }, 50);

    // setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      role="alert"
      className={classNames('alert', {
        [`alert-${variant}`]: true,
        'alert-dismissible': dismissible,
      })}
    >
      {children}
      {dismissible && (
        <button type="button" className="close" aria-label="Close" onClick={() => dismiss()}>
          <span aria-hidden="true">&times;</span>
        </button>
      )}
    </div>
  );
}

Alert.propTypes = {
  children: node.isRequired,
  dismissible: bool,
  variant: oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']),
};

Alert.defaultProps = {
  variant: 'primary',
  dismissible: false,
};

export default Alert;
