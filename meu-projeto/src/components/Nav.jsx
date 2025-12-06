import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

export default function Nav({ links }) {
  return (
    <nav className={styles.nav}>
      <h2>LOCAL</h2>
      <div>
        {links.map(link => (
          <Link key={link.to} to={link.to}>{link.label}</Link>
        ))}
      </div>
    </nav>
  );
}
