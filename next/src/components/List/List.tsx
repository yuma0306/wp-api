/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Components
 */
import WpImg from '@/components/WpImg/WpImg';
import WpEditor from '@/components/WpEditor/WpEditor';
/**
 * Styles
 */
import styles from '@/components/List/List.module.scss';
/**
 * Export default
 */
export default function List({ list }: { list: PostType['acf']['tool_feature'] }) {
  return (
    <ul className={styles.list}>
      {list.map((item, index) =>
        <li className={`${styles.list__item}`} key={index}>
          <div className={styles.list__block}>
            <WpImg imgID={item.tool_feature_img} />
          </div>
          <dl className={styles.list__dl}>
            <dt className={styles.list__term}>
              {item.tool_feature_title}
            </dt>
            <dd className={styles.list__desc}>
              <WpEditor>
                {item.tool_feature_desc}
              </WpEditor>
            </dd>
          </dl>
        </li>
      )}
    </ul>
  );
}
