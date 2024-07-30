import type { WP_REST_API_Attachment } from "wp-types";

export type AcfLPFlexibleType = {
  acf_fc_layout: string;
  lp_field_img: number;
  lp_field_editor: string;
  lp_field_cta_link: {
    target: string;
    title: string;
    url: string;
  };
};

export type AcfType =  {
  canonical_field: string;
  meta_desc_field: string;
  meta_title_field: string;
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
  lp_flexible: AcfLPFlexibleType[];
};

export type PostType = WP_REST_API_Attachment & {
  acf: AcfType;
};
