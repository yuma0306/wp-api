import type { WP_REST_API_Attachment } from "wp-types";

export type PostType = WP_REST_API_Attachment & {
  acf: {
    canonical_field: string;
    meta_title_field: string;
    meta_desc_field: string;
    nofollow_field: boolean;
    noindex_field: boolean;
    og_image_field: string;
    og_url_field: string;
    tool_fv: number;
    tool_feature: {
      tool_feature_title: string;
      tool_feature_desc: string;
      tool_feature_img: number;
    }[];
    tool_faq: {
      tool_faq_question: string;
      tool_faq_answer: string;
    }[]
    tool_link: string;
  };
  slug: string;
};

/**
 * 単一のオブジェクト
 */
// const example: {
//   tool_feature: {
//     tool_feature_title: string;
//     tool_feature_desc: string;
//     tool_feature_img: number;
//   };
// } = {
//   tool_feature: {
//     tool_feature_title: "Example Title",
//     tool_feature_desc: "Example Description",
//     tool_feature_img: 123
//   }
// };

/**
 * オブジェクト型の配列
 */
// const example: {
//   tool_feature: {
//     tool_feature_title: string;
//     tool_feature_desc: string;
//     tool_feature_img: number;
//   }[];
// } = {
//   tool_feature: [
//     {
//       tool_feature_title: "Example Title 1",
//       tool_feature_desc: "Example Description 1",
//       tool_feature_img: 123
//     },
//     {
//       tool_feature_title: "Example Title 2",
//       tool_feature_desc: "Example Description 2",
//       tool_feature_img: 456
//     }
//   ]
// };
