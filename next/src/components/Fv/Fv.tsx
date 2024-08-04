/**
 * Props
 */
type Props = {
  children: React.ReactNode;
};

/**
 * styles
 */
import styles from '@/components/Fv/Fv.module.scss';

export default function Fv({ children }: Props) {
  return (
    <>
      <div className={styles.fv}>
        { children }
      </div>
    </>
  );
}
