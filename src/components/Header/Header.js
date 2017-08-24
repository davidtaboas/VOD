import React from 'react';
import { Link } from 'react-router-dom';
import FaBookmarkO from 'react-icons/lib/fa/bookmark-o';

const Header = () => {
  const component = (
    <div className="header">
      <h1>Accedo Web Programming Test</h1>
      <Link to={'/history'} className="header--link">
        <FaBookmarkO />
        <span>Historial</span>
      </Link>
    </div>
  );
  return component;
};

export default Header;
