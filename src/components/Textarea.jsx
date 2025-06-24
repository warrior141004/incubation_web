// src/components/Textarea.jsx
import React from 'react';

const Textarea = (props) => {
  return <textarea {...props} className={`custom-textarea ${props.className || ''}`} />;
};

export default Textarea;
