import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav({ links }) {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>FutSystem ⚽</span>
      <div className={styles.links}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            className={`${styles.link} ${location.pathname === l.to ? styles.active : ''}`}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

