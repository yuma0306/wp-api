/**
 * React Next
 */
import { useState, useRef } from 'react';
/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Styles
 */
import styles from '@/components/Faq/Faq.module.scss';
/**
 * Export default
 */
export default function Faq({ faq }: { faq: PostType['acf']['tool_faq'] }) {
  return (
    <div className={styles.faq}>
      {faq.map((item, index) => {
        const [isActive, setIsActive] = useState(false);
        const refAnswer = useRef<HTMLDListElement>(null);
        return (
          <dl
            className={`${styles.faq__item} ${isActive ? styles['faq__item--isActive'] : ''}`}
            key={index}
            onClick={() => setIsActive(!isActive)}
          >
            <dt className={styles.faq__question}>
              {item.tool_faq_question}
              <span className={styles.faq__icon}></span>
            </dt>
            <dd
              className={styles.faq__answer}
              ref={refAnswer}
              style={{
                height: isActive && refAnswer.current ? `${refAnswer.current.scrollHeight}px` : '0px',
              }}
            >
              {item.tool_faq_answer}
            </dd>
          </dl>
        );
      })}
    </div>
  );
}
