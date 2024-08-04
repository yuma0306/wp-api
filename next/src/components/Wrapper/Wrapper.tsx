/**
 * Style
 */
import styles from '@/components/Wrapper/Wrapper.module.scss';
import { Noto_Sans_JP } from 'next/font/google';
const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], display: 'swap' });

type Props = {
  children: React.ReactNode;
  addClass?: string;
}

export default function Wrapper({ children, addClass }: Props) {
  return (
    <>
      <div className={`${notoSansJP.className} ${styles.wrapper} ${addClass ? addClass : ''}`}>
        { children }
      </div>
    </>
  )
}
