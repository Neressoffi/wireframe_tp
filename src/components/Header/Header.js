import React from 'react';
import './Header.scss';

function Header() {
  return (
    <div className="header-container">
      <h1>Qui travaille aujourd'hui?</h1>
    
      <button className="salle-button">Salle</button>
      <button className="Cuisine-button">Cuisine</button>
      <button className="Service-button">Service</button>

      {/* Rectangle après les boutons */}
      <div className="rectangle rectangle3"></div>
    </div>
  );
}

export default Header;
