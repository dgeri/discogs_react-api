import React from 'react';
import './App.css';
import {Link} from  'react-router-dom';

function Nav() {
  return (
    <nav>
        <ul className='main-nav'>
            <Link to="/about">
                <li>About</li>
            </Link>
            <Link to="/search">
                <li>Search</li>
            </Link>
            <Link to="/favorites">
                <li>Favorites</li>
            </Link>
        </ul>
    </nav>
  );
}

export default Nav;
