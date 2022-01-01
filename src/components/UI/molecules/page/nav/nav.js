import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ listNav }) => (
  <React.Fragment>
    <ul>
      {listNav.map((e, i) => (
        <li key={i}>
          <Link to={e.to}>{e.title}</Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

Nav.propTypes = {
  listNav: PropTypes.arrayOf(PropTypes.shape()),
};
export default Nav;
