import styles from '@/styles/WpEditor.module.css';

type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function WpEditor({ children, addClass }: Props) {
  return (
    <div className={`${styles.wpEditor} ${addClass}`} dangerouslySetInnerHTML={{ __html: `${children}` || '' }}></div>
  );
}
