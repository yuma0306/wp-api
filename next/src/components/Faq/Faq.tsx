/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Components
 */
import FaqItem from '@/components/FaqItem/FaqItem';
/**
 * Styles
 */
import styles from '@/components/Faq/Faq.module.scss';

export default function Faq({ faq }: { faq: PostType['acf']['tool_faq'] }) {
  return (
    <div className={styles.faq}>
      {faq.map((item, index) => {
        return (
          <FaqItem
            key={index}
            question={item.tool_faq_question}
            answer={item.tool_faq_answer}
          />
        );
      })}
    </div>
  );
}
