import type { BlogPost } from "deco-sites/blog-do-ramils/loaders/BlogPostData.ts";

export interface Props {
  BlogPosts: BlogPost[];
}

export default function MostRecentlyPosts({ BlogPosts }: Props) {
  return (
    <div>
      {BlogPosts.map((blogPost) => {
        return <h1>{blogPost.titleH1}</h1>;
      })}
    </div>
  );
}
