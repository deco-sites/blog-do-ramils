import type { BlogPost } from "$store/loaders/BlogPostData.ts";

import { RequestURLParam } from "apps/website/functions/requestToParam.ts";

export interface LoaderBlogPosts {
  blogPosts: BlogPost[];
  slug?: RequestURLParam;
}

const Loader = ({ blogPosts, slug }: LoaderBlogPosts): BlogPost | null => {
  if (slug) {
    const filtered = blogPosts.filter((post) => {
      return post.slug == slug;
    });

    return filtered[0];
  }

  return null;
};

export default Loader;
