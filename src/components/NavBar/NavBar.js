import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
;


const NavBar = () => {
  return <nav>
      <ul className="menu">
          <li className="menu-item"><Link to="/">Home</Link></li>
          <li className="menu-item"><Link to="/profile">Profile</Link></li>
          <li className="menu-item"><Link to="/products">Products</Link></li>
      </ul>

  </nav>;
};

export default NavBar;
