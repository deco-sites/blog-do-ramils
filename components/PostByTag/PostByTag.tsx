import type { BlogPost } from "$store/loaders/BlogPostData.ts";

export interface Props {
    posts: BlogPost[] | null;
}

export default function PostByTag({ posts }: Props) {
    if (posts) {
        return <p>{posts[0].titleH1}</p>
    }

    return <p>Not Found</p>;
}