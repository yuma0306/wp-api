/**
 * Types
 */
import { PostType } from '@/types/Post';
/**
 * Styles
 */
import styles from '@/components/List02/List02.module.scss';
/**
 * Components
 */
import TextLink from '@/components/TextLink/TextLink'

export default function List02({ list }: { list: PostType[] }) {
  return (
    <ul className={styles.list02}>
      {list.map(template => (
        <li className={styles.list02__item} key={template.id}>
          <span className={styles.list02__text}>{template.title.rendered}：</span>
          <TextLink href={`/tool/${template.slug}/`}>
            {`/tool/${template.slug}/`}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}
