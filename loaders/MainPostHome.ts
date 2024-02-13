import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface BlogPosts {
  blogPosts: BlogPost[];
}

const Loader = ({ blogPosts }: BlogPosts): BlogPost | null => {
  let mostRecentTimeStamp = 0;
  let blogPostIndexMostRecent = 0;

  blogPosts.forEach((post, index) => {
    const date = post.releaseInfo.releaseDate;

    const getMonth = date.split("/")[0];
    const getDay = date.split("/")[1];
    const getYear = date.split("/")[2];

    const getTimeStamp = new Date(`${getMonth}/${getDay}/${getYear}`).getTime();

    if (getTimeStamp > mostRecentTimeStamp) {
      mostRecentTimeStamp = getTimeStamp;
      blogPostIndexMostRecent = index;
    }
  });

  return blogPosts[blogPostIndexMostRecent] || null;
};

export default Loader;
