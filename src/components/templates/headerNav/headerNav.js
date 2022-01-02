import React from 'react';
import Nav from 'components/UI/molecules/page/nav';
import styles from './headerNav.module.css';

const headerNav = ({ colorLink, style, listNav }) => {
  return (
    <div className={styles.flex}>
      <Nav style={style} colorLink={colorLink} listNav={listNav} />
    </div>
  );
};

export default headerNav;
