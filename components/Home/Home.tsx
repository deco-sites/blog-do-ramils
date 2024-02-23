import MainPost from "./MainPost.tsx";
import ShelveHome from "./ShelveHome.tsx";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface MostRecentlyPosts {
  mainPost: BlogPost | null;
  mostRecentlyPosts: BlogPost[];
}

export default function Home(
  { mainPost, mostRecentlyPosts }: MostRecentlyPosts,
) {
  if (!mainPost) {
    return (
      <div>
        Not Found
      </div>
    );
  }

  return (
    <>
      <head>
        <link
          rel="preload"
          href={mainPost.banner.image}
          as="image"
        />
      </head>
      <div className="lg:mainContainerHome defaultHeight">
        <MainPost mainPost={mainPost} />
        <ShelveHome blogPosts={mostRecentlyPosts} mainPost={mainPost} />
      </div>
    </>
  );
}
