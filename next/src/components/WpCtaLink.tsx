import styles from '@/styles/WpCtaLink.module.css';

type Props = {
  href: string;
  target: string;
  children: React.ReactNode;
  addClass?: string;
}

export default function WpCtaLink({ href, target, children, addClass }: Props) {
  return (
    <a className={`${styles.WpCtaLink} ${addClass && styles[addClass]}`} href={href} target={target}>
      {children}
    </a>
  );
}
