
import React, { useState } from 'react';
// src/index.js ou src/App.js
import 'bootstrap-icons/font/bootstrap-icons.css';
const TemaToggle = ({ onToggle }) => {
  const [modoEscuro, setModoEscuro] = useState(false);

  const toggleTema = () => {
    setModoEscuro(!modoEscuro);
    onToggle(!modoEscuro);
  };

  return (
    <div className='tema_toggle'>
      <label>
        {modoEscuro ? (
          <span className="bi bi-sun" style={{ color: 'yellow', fontSize: '2em' }}></span>
        ) : (
          <span className="bi bi-moon" style={{ color: 'gray', fontSize: '2em' }}></span>
        )}
        <input style={{display: 'none'}} type="checkbox" checked={modoEscuro} onChange={toggleTema} />
      </label>
    </div>
  );
};

export default TemaToggle;
