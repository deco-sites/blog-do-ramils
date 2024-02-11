import Image from "apps/website/components/Image.tsx";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface Props {
  blogPost: BlogPost | null;
  isLastPost: boolean;
}

export default function CardPost({ blogPost, isLastPost }: Props) {
  if (!blogPost) {
    return <></>;
  }

  return (
    <a href={`/post/${blogPost.slug}`}>
      <div
        className={`${
          isLastPost ? "mb-0" : "mb-20"
        } sm:w-[45%] lg:w-[33%] blur-sm`}
      >
        <Image
          src={blogPost.banner.image}
          alt={blogPost.banner.altText}
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />

        <h3 className="font-medium text-xl mt-4 mainContainer hover:text-[#64DEE5] xl:text-2xl lg:mt-7 sm:w-[100%]">
          {blogPost.titleH1}
        </h3>
      </div>
    </a>
  );
}
