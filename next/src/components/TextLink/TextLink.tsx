/**
 * React Next
 */
import Link from 'next/link';
/**
 * Styles
 */
import styles from '@/components/TextLink/TextLink.module.scss';

type Props = {
  href: string,
  children: React.ReactNode,
}

export default function TextLink({ href, children }: Props) {
  return (
    <Link className={styles.textLink} href={href}>
      {children}
    </Link>
  );
}
