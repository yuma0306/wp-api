/**
 * React Next
 */
import Head from 'next/head';
/**
 * Component
 */
import WpImg from '@/components/WpImg';
// import WpImgBuild from '@/components/WpImgBuild';
import WpSection from '@/components/WpSection';
import WpEditor from '@/components/WpEditor';
import Prod from '@/components/Prod';
import Dev from '@/components/Dev';
/**
 * Types
 */
import type { PostType } from '@/types/Post';
/**
 * Functions
 */
import { getTemplatePaths } from '@/functions/getTemplatePaths';
import { getTemplateProps } from '@/functions/getTemplateProps';
/**
 * Async
 */
// ページのパス一覧を取得
export const getStaticPaths = getTemplatePaths('page-lp-tool.php');
// パス一覧から現在のURLに一致するpostを取得
export const getStaticProps = getTemplateProps('page-lp-tool.php');
/**
 * Export default
 */
export default function Article({ post }: { post: PostType }) {
  // console.log(post);
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>{post.acf.meta_title_field}</title>
        <meta name="description" content={post.acf.meta_desc_field} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WpImg imgID={post.acf.tool_fv} />
      <WpSection>
        {/* {process.env.NODE_ENV === 'development' ? <Dev /> : <Prod />} */}
        <ul style={{ display: 'grid', gap: '24px' }}>
          {post.acf.tool_feature.map((item, index) => {
            return (
              <li style={{display: 'flex', gap: '24px', padding: '24px 0', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }} key={index}>
                <div style={{ flex: '1' }}>
                  <WpImg imgID={item.tool_feature_img} />
                </div>
                <div style={{ flex: '1' }}>
                  <h3 style={{ fontSize: '24px', fontWeight: 'bold' }}>{item.tool_feature_title}</h3>
                  <WpEditor addClass="u-mt20">{item.tool_feature_desc}</WpEditor>
                </div>
              </li>
            );
          })}
        </ul>
      </WpSection>
    </>
  );
}
