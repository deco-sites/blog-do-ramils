import CardPost from "$store/components/Home/CardPost.tsx";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface BlogPosts {
  blogPosts: BlogPost[];
}

export default function ShelveHome({ blogPosts }: BlogPosts) {
  const totalPosts = blogPosts.length;
  const newOrder = blogPosts.reverse();

  return (
    <div className="border-t-2 border-[#000] py-12 text-[#464646]">
      <h2 className="font-medium text-2xl mainContainer mb-7 lg:ml-0 xl:text-4xl lg:mb-12">
        {"Mais Posts"}
      </h2>

      <div className="sm:flex sm:w-[85vw] sm:mx-[auto] items-start justify-start gap-10 relative mh-[100px]">
        {newOrder.map((eachPost, index) => {
          return index != 0
            ? <CardPost isLastPost={index == totalPosts} blogPost={eachPost} />
            : "";
        })}
        <div
          className={`border-2 rounded-sm border-[#000] text-[#000] absolute top-1 -rotate-12 bg-[#fff] left-[0px] md:left-[-5px] px-3 font-semibold text-[14px]`}
        >
          {"Em breve"}
        </div>
      </div>
    </div>
  );
}
