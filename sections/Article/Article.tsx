import { ImageWidget } from "apps/admin/widgets.ts";

import Banner from "./Banner.tsx";
import TitlePost from "./TitlePost.tsx";
import SubTitlePost from "./SubTitle.tsx";
import ReleaseInfo from "./ReleaseInfo.tsx";

export interface Props {
  titlePost: string;
  subTitlePost: string;
  bannerImage: {
    image: ImageWidget;
    altText?: string;
  };
  releaseDate: Date;
  author: string;
}

export default function Article(
  { titlePost, subTitlePost, bannerImage, releaseDate, author }: Props,
) {
  return <Banner bannerImage={bannerImage} />;
}
