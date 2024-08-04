/**
 * React Next
 */
import { useState, useRef } from 'react';
/**
 * Types
 */
import { PostType } from '@/types/Post';
type Props = {
  question: PostType['acf']['tool_faq'][0]['tool_faq_question'];
  answer: PostType['acf']['tool_faq'][0]['tool_faq_answer'];
};
/**
 * Styles
 */
import styles from '@/components/FaqItem/FaqItem.module.scss';

export default function FaqItem({ question, answer }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const refAnswer = useRef<HTMLDListElement>(null);
  const handleAcc = () => {
    setIsActive(!isActive);
  };
  return (
    <dl
      className={`${styles.faqItem} ${isActive ? styles['faqItem--isActive'] : ''}`}
      onClick={handleAcc}
    >
      <dt className={styles.faqItem__question}>
        {question}
        <span className={styles.faqItem__icon}></span>
      </dt>
      <dd
        className={styles.faqItem__answer}
        ref={refAnswer}
        style={{
          height: isActive && refAnswer.current ? `${refAnswer.current.scrollHeight}px` : '0px',
        }}
      >
        {answer}
      </dd>
    </dl>
  );
}
