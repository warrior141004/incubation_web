// src/components/Input.jsx
import React from 'react';

const Input = (props) => {
  return <input {...props} className={`custom-input ${props.className || ''}`} />;
};

export default Input;
