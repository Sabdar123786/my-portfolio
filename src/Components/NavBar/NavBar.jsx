import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Sabdar</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: 'none' }}>
            <li>
              <Link  style={{ textDecoration: 'none', color: 'ActiveBorder' }} to={'./'}>Introduction</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'ActiveBorder' }} to="./education">Education</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'ActiveBorder' }} to='./achievement'>Achievements</Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'ActiveBorder' }} to='./skills'>Skills </Link>
            </li>
            <li>
              <Link style={{ textDecoration: 'none', color: 'ActiveBorder' }} to='./projects'>Projects</Link>
            </li>
          </ul>
        </div>
        <Link style={{ textDecoration: 'none', color: 'ActiveBorder' }} to='./contact'>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
