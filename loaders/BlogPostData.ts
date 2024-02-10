import type { HTMLWidget } from "apps/admin/widgets.ts";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface BlogPost {
  slug: string;
  titleH1: string;
  subTitle: string;
  banner: {
    image: ImageWidget;
    altText: string;
  };
  releaseInfo: {
    author: string;
    /**
     * @format date
     */
    releaseDate: string;
  };
  content: HTMLWidget;
}

export interface LoaderBlogPosts {
  blogPosts: BlogPost[];
}

const Loader = ({ blogPosts }: LoaderBlogPosts): BlogPost[] => {
  return blogPosts;
};

export default Loader;
