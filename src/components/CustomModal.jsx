// src/components/CustomModal.jsx
import React from 'react';
import Button from './Button'; // Import Button component
import Card from './Card';     // Import Card component

const CustomModal = ({ message, onClose }) => {
  if (!message) return null;
  return (
    <div className="modal-overlay">
      <Card className="modal-card">
        <p className="modal-message">{message}</p>
        <Button onClick={onClose} className="modal-close-button">Close</Button>
      </Card>
    </div>
  );
};

export default CustomModal;
