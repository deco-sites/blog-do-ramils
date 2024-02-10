import Banner from "./Banner.tsx";
import Title from "./Title.tsx";
import SubTitle from "./SubTitle.tsx";
import ReleaseInfo from "./ReleaseInfo.tsx";

import { ImageWidget } from "apps/admin/widgets.ts";

import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface Props {
  blogPost: BlogPost | null;
}

/*
    <Banner {...banner} />
    <Title {...title} />
    <SubTitle {...subtitle} />
    <ReleaseInfo {...releaseInfo} />
*/

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
        <p>{blogPost.titleH1}</p>
      </div>
    </div>
  );
}
