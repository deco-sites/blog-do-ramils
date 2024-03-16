import type { BlogPost } from "$store/loaders/BlogPostData.ts";
import { RequestURLParam } from "apps/website/functions/requestToParam.ts";

export interface LoaderPostsByTag {
  posts: BlogPost[];
  tag?: RequestURLParam;
}

const PostsByTag = ({ tag, posts }: LoaderPostsByTag): BlogPost[] | null => {
  if (tag) {
    const filtered = posts.filter((post) => {
      return post.tag?.indexOf(tag) != -1;
    });

    return filtered;
  }

  return null;
};

export default PostsByTag;
