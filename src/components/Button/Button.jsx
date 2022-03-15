import React from 'react';
import './Button.scss';

const Button = ({ children, onClick, isDisabled }) => {
  if (isDisabled)
    return (
      <button onClick={onClick} disabled>
        {children}
      </button>
    );
  else return <button onClick={onClick}>{children}</button>;
};

export default Button;
