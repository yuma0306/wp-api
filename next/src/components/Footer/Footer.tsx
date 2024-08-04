/**
 * Component
 */
import Inner from '@/components/Inner/Inner';
/**
 * styles
 */
import styles from '@/components/Footer/Footer.module.scss';

export default function Footer() {
  return (
    <>
      <Inner>
        <footer className={styles.footer}>
          <p className={styles.footer__copy}>&copy;&nbsp;UmaCode</p>
        </footer>
      </Inner>
    </>
  );
}
