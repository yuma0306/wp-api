/**
 * Style
 */
import styles from '@/components/HeadingLv2/HeadingLv2.module.scss';

type Props = {
  children: React.ReactNode;
  addClass?: string;
}

export default function HeadingLv2({ children, addClass }: Props) {
  return (
    <>
      <h2 className={`${styles.headingLv2} ${addClass ? addClass : ''}`}>
        { children }
      </h2>
    </>
  );
}
