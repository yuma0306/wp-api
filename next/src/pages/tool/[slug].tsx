/**
 * React Next
 */
import Head from 'next/head';
/**
 * Constants
 */
import { host, ogpDefault } from '@/constants/wp';
/**
 * Types
 */
import type { PostType } from '@/types/Post';
import type { MetaType } from '@/types/Meta';
/**
 * Component
 */
import Inner from '@/components/Inner/Inner';
import List from '@/components/List/List';
import WpImg from '@/components/WpImg/WpImg';
import WpSection from '@/components/WpSection/WpSection';
import Wrapper from '@/components/Wrapper/Wrapper';
/**
 * Functions
 */
import { getTemplatePaths } from '@/functions/getTemplatePaths';
import { getTemplateProps } from '@/functions/getTemplateProps';
import { getRobotsTag } from '@/functions/getRobotsTag';
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
export default function Article({ post, slug }: { post: PostType, slug: MetaType['slug'] }) {
  // console.log(post);
  const robotsTag = getRobotsTag({ noindex: post.acf.noindex_field, nofollow: post.acf.nofollow_field });
  const canonicalUrl = post.acf.canonical_field || `${host}/tool/${slug}/`;
  const ogUrl = post.acf.og_url_field || `${host}/tool/${slug}/`;
  const ogImg = post.acf.og_image_field || ogpDefault;
  return (
    <>
      <Head>
        <title>{post.acf.meta_title_field}</title>
        <meta name="description" content={post.acf.meta_desc_field} />
        <meta name="robots" content={robotsTag} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ja_JP" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:site_name" content={post.acf.meta_title_field} />
        <meta property="og:image" content={ogImg} />
        <meta property="og:title" content={post.acf.meta_title_field} />
        <meta property="og:description" content={post.acf.meta_desc_field} />
      </Head>
      <Wrapper>
        <Inner>
          <WpImg imgID={post.acf.tool_fv} />
        </Inner>
        <WpSection>
          <Inner>
            <List post={ post } />
          </Inner>
        </WpSection>
      </Wrapper>
    </>
  );
}
