import styles from '@/styles/HeadingLv1.module.css';

type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function Editor({ children, addClass }: Props) {
  return (
    <h1 className={`${styles.HeadingLv1} ${addClass && styles[addClass]}`}>{children}</h1>
  );
}
