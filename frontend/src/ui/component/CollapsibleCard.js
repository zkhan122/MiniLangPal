import React, { useState } from 'react';
import '../css/collapse-card.css';

const CollapsibleCard = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-card">
      <div className="header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </div>
      <div
        className={`content ${isOpen ? 'expanded' : ''}`}
        style={{
          maxHeight: isOpen ? '500px' : '0'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CollapsibleCard;