import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <React.Fragment>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">About</Link>
      </li>
      <li>
        <Link to="/login">Dashboard</Link>
      </li>
    </ul>
  </React.Fragment>
);

export default Nav;
