/**
 * Style
 */
import styles from '@/components/WpEditor/WpEditor.module.scss';

type Props = {
  children: React.ReactNode;
  addClass?: string;
}

export default function Wrapper({ children, addClass }: Props) {
  return (
    <>
      <div className={`${styles.wpEditor} ${addClass}`}>
        { children }
      </div>
    </>
  )
}
