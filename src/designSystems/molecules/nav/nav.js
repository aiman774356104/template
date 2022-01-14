import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Nav = ({ listNav, className, colorLink, style }) => (
  <React.Fragment>
    <ul
      style={{ listStyleType: 'none', ...style }}
      className={className}
    >
      {listNav.map((e, i) => (
        <li key={i}>
          <Link style={{ color: colorLink, textDecoration: 'none' }} to={e.to}>
            {e.title}
          </Link>
        </li>
      ))}
    </ul>
  </React.Fragment>
);

Nav.propTypes = {
  listNav: PropTypes.arrayOf(PropTypes.shape()),
  className: PropTypes.string,
  colorLink: PropTypes.string,
  style: PropTypes.shape(),
};
export default Nav;
