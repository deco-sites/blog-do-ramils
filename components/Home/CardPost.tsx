import Image from "apps/website/components/Image.tsx";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface Props {
  blogPost: BlogPost | null;
  isLastPost: boolean;
  position: number;
}

export default function CardPost({ blogPost, isLastPost, position }: Props) {
  if (!blogPost) {
    return <></>;
  }

  return (
    <>
      <head>
        { position == 0 ? <link rel="preload" as="image" href={blogPost.banner.image} /> : '' }
      </head>
      <a
        href={`/post/${blogPost.slug}`}
        className={`${
          isLastPost ? "mb-0" : "mb-20"
        } sm:w-[45%] lg:w-[33%] blur-sm block pointer-events-none`}
      >
        <div>
          <Image
            src={blogPost.banner.image}
            alt={blogPost.banner.altText}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            loading={position == 0 ? "eager" : "lazy"}
            fetchPriority={position == 0 ? "high": "low"}
          />
          <h3 className="font-medium text-xl mt-4 mainContainer hover:text-[#64DEE5] xl:text-2xl lg:mt-7 sm:w-[100%]">
            {blogPost.titleH1}
          </h3>
        </div>
      </a>
    </>
  );
}
