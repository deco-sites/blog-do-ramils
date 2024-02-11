import Banner from "./Banner.tsx";
import Title from "./Title.tsx";
import SubTitle from "./SubTitle.tsx";
import ReleaseInfo from "./ReleaseInfo.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface Props {
  blogPost: BlogPost | null;
}

export default function Post({ blogPost }: Props) {
  if (!blogPost) {
    return (
      <div>
        <p>Not Found</p>
      </div>
    );
  }

  return (
    <div className="bg-[#fff] defaultHeight">
      <div className="mainContainer pt-[50px]">
        <Banner
          image={blogPost.banner.image}
          altText={blogPost.banner.altText}
        />
        <Title titleH1={blogPost.titleH1} />
        <SubTitle subTitleH2={blogPost.subTitle} />
        <ReleaseInfo
          releaseDate={blogPost.releaseInfo.releaseDate}
          author={blogPost.releaseInfo.author}
        />

        <article
          className={`contentPost mb-[100px]`}
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        />
      </div>
    </div>
  );
}
