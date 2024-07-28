/**
 * React Next
 */
import Head from 'next/head';
/**
 * Component
 */
import HeadingLv1 from '@/components/HeadingLv1';
import WpEditor from '@/components/WpEditor';
import WpCtaLink from '@/components/WpCtaLink';
import WpImg from '@/components/WpImg';
/**
 * Types
 */
import type { PostType, AcfLPFlexibleType } from '@/types/Post';
/**
 * Functions
 */
import { getTemplatePaths } from '@/functions/getTemplatePaths';
import { getTemplateProps } from '@/functions/getTemplateProps';
/**
 * Async
 */
// ページのパス一覧を取得
export const getStaticPaths = getTemplatePaths('page-lp-switchbot.php');
// パス一覧から現在のURLに一致するpostを取得
export const getStaticProps = getTemplateProps('page-lp-switchbot.php');
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
      <HeadingLv1 addClass="HeadingLv1--switchbot">{post.title.rendered}</HeadingLv1>
      {Array.isArray(post.acf.lp_flexible) && post.acf.lp_flexible.map((item: AcfLPFlexibleType, index: number) => (
        <>
          {item.acf_fc_layout === 'lp_layout_img' && (
            <WpImg key={index} imgID={item.lp_field_img} />
          )}
          {item.acf_fc_layout === 'lp_layout_editor' && (
            <WpEditor key={index}>
              {item.lp_field_editor}
            </WpEditor>
          )}
          {item.acf_fc_layout === 'lp_layout_cta' && item.lp_field_cta_link && (
            <WpCtaLink
              key={index}
              href={item.lp_field_cta_link.url}
              target={item.lp_field_cta_link.target === '' ? '_self' : item.lp_field_cta_link.target}
              addClass="WpCtaLink--switchbot"
            >
              {item.lp_field_cta_link.title}
            </WpCtaLink>
          )}
        </>
      ))}
    </>
  );
}
