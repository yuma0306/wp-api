import styles from '@/components/WpSection/WpSection.module.scss';

type Props = {
  children: React.ReactNode;
  addClass?: string;
};

export default function WpSection({ children, addClass }: Props) {
  return (
    <section className={`${styles.wpSection} ${addClass ? addClass : ''}`}>
      {children}
    </section>
  );
}
