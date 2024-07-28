import styles from '@/styles/WpEditor.module.css';

type Props = {
  children: React.ReactNode;
};

export default function Editor({ children }: Props) {
  return (
    <div className={`${styles.wpEditor}`} dangerouslySetInnerHTML={{ __html: `${children}` || '' }}></div>
  );
}
