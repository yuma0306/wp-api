import { PostType } from "@/types/Post";

type Props = {
  noindex: PostType['acf']['noindex_field'];
  nofollow: PostType['acf']['nofollow_field'];
}

export const getRobotsTag = ({ noindex, nofollow }: Props) => {
  let robotsTag = 'index';
  if(noindex && nofollow) {
    robotsTag = 'none';
  } else if(noindex && !nofollow) {
    robotsTag = 'noindex';
  } else if(!noindex && nofollow) {
    robotsTag = 'nofollow';
  }
  return robotsTag;
}
