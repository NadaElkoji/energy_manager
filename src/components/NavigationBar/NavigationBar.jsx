import React from 'react';
import './NavigationBar.css';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <ul className="navigation-menu">
        <li className="navigation-item">
          <a href="/analysis">Analysis</a>
        </li>
        <li className="navigation-item">
          <a href="/control">Control</a>
        </li>
        <li className="navigation-item">
          <a href="/predict">Predict</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;