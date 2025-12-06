import styles from './Footer.module.css';

export default function Footer({ year }) {
  return (
    <footer className={styles.footer}>
      © {year} - LOCAL
    </footer>
  );
}
