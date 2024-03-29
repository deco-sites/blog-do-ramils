import Banner from "./Banner.tsx";
import TagList from "./TagList.tsx";
import Title from "./Title.tsx";
import SubTitle from "./SubTitle.tsx";
import ReleaseInfo from "./ReleaseInfo.tsx";
import Seo from "./Seo.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";
import type { Tag } from "$store/loaders/Tags.ts";
import { redirect } from "deco/mod.ts";

export interface Props {
  blogPost: BlogPost | null;
  tags: Tag[];
}

export default function Post({ blogPost, tags }: Props) {
  if (!blogPost) {
    redirect("https://deco-sites-blog-do-ramils.deno.dev/404");

    return <div>Not Found</div>;
  }

  return (
    <>
      <head>
        <link rel="preload" href={blogPost.banner.image} as="image" />
        <Seo blogPost={blogPost} />
      </head>
      <div className="bg-[#fff] defaultHeight">
        <div className="mainContainer pt-[50px]">
          <Banner
            image={blogPost.banner.image}
            altText={blogPost.banner.altText}
          />
          <TagList tags={blogPost.tag} allTags={tags} />
          <Title titleH1={blogPost.titleH1} />
          <SubTitle subTitleH2={blogPost.subTitle} />
          <ReleaseInfo
            releaseDate={blogPost.releaseInfo.releaseDate}
            author={blogPost.releaseInfo.author}
          />

          <article
            className={`contentPost`}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </>
  );
}
