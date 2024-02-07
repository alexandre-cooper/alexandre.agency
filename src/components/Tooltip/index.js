// Tooltip.js
import React, { useState } from 'react';
import '../../index.css';

const Tooltip = ({ text, children }) => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setTooltipVisible(true);
    setPosition({ x: e.pageX + 10, y: e.pageY + 10 });
  };

  const handleMouseLeave = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {isTooltipVisible && (
        <div className="tooltip" style={{ left: position.x, top: position.y }}>
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
