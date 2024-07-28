import { GetStaticPaths } from 'next';
import type { PostType } from '@/types/Post';

// 高階関数（関数を返す関数）
// 最初のアロー関数は、templateを引数として受け取り、「GetStaticPaths型」の関数を返す
// 返された関数は、GetStaticPathsの仕様に従って非同期関数として定義
export const getTemplatePaths = (template: string): GetStaticPaths =>
  async () => {  // 非同期関数を返す
    const res = await fetch('http://localhost/wp-json/wp/v2/pages/');
    const posts: PostType[] = await res.json();
    const paths = posts
      .filter((post) => post.template === template)
      .map((post) => ({
        params: { slug: post.slug },
      }));
    return { paths, fallback: false };
  };
