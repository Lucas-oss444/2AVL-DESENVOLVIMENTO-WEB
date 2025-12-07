import React from 'react';
import styles from './Footer.module.css';

export default function Footer({ year }) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        © {year} - FutSystem
      </div>
    </footer>
  );
}

