import Link from 'next/link';
/**
 * style
 */
import styles from './WpBtn.module.scss';

export default function WpBtn() {
  return (
    <>
      <Link className={styles.wpBtn} href="/tool/mamp/" target="_blank" rel="noopener noreferrer">
        <span className={styles.wpBtn__text}>公式サイトを見る</span>
      </Link>
    </>
  );
}
