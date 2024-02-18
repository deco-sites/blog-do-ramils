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

  const articleStructuredData =
    `{"@context":"https://schema.org","@type":"Article","name":"${blogPost.titleH1}","author":{"@type":"Person","name":"${blogPost.releaseInfo.author}","url":"https://deco-sites-blog-do-ramils.deno.dev/post/${blogPost.slug}"},"datePublished":"${blogPost.releaseInfo.releaseDate}","image":"${blogPost.banner.image}","headline":"${blogPost.titleH1}","articleBody":"${blogPost.subTitle}"}`;
  const title = blogPost.titleH1 + ` | Blog do Ramils`;

  return (
    <>
      <head>
        <title>{title}</title>
        <meta name="description" content={blogPost.subTitle} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: articleStructuredData }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
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
            className={`contentPost`}
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />
        </div>
      </div>
    </>
  );
}
