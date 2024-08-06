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
/**
 * Constans
 */
import { host } from '@/constants/wp';

export default function List02({ list }: { list: PostType[] }) {
  return (
    <ul className={styles.list02}>
      {list.map(template => (
        <li className={styles.list02__item} key={template.id}>
          <span className={styles.list02__text}>{template.title.rendered}：</span>
          <TextLink href={template.link.replace(host, '')}>
            {template.link.replace(host, '')}
          </TextLink>
        </li>
      ))}
    </ul>
  );
}
