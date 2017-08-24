import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const component = (
    <div className="header">
      <h1>Accedo Web Programming Test</h1>
      <Link to={'/history'}>
        Historial
      </Link>
    </div>
  );
  return component;
};

export default Header;
