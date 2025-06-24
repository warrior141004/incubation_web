// src/components/Button.jsx
import React from 'react';

const Button = (props) => {
  // Use a default custom-button class, and allow additional classes via props.className
  return <button {...props} className={`custom-button ${props.className || ''}`} />;
};

export default Button;
