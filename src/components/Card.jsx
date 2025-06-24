// src/components/Card.jsx
import React from 'react';

const Card = (props) => {
  return <div {...props} className={`custom-card ${props.className || ''}`} />;
};

export default Card;
