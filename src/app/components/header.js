'use client'
import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex justify-end dropdown" style={{ position: 'relative' }}>
      <button 
        className="dropdown-toggle" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
          <path fill="currentColor" d="M3 4h18v2H3zm6 7h12v2H9zm-6 7h18v2H3z"/>
        </svg>
      </button>
      {isOpen && (
        <div className="bg-gray-700 p-2 rounded-md dropdown-menu" style={{ position: 'absolute', top: '100%', right: 0 }}>
          <ul>
            <li>Made with ❤️ by Gabo aaaaaaaaa JAJAJJACJKASHDSJFASDHFBAJK</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
