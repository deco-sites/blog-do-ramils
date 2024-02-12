import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface BlogPosts {
  blogPosts: BlogPost[];
}

const Loader = ({ blogPosts }: BlogPosts): BlogPost | null => {
  const mainPost = blogPosts.filter((_post, index) => {
    return index == blogPosts.length - 1;
  });

  return mainPost[0] || null;
};

export default Loader;
