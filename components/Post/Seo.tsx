import type { BlogPost } from "$store/loaders/BlogPostData.ts";

interface Props {
  blogPost: BlogPost | null;
}

export default function Seo({ blogPost }: Props) {
    if (!blogPost) {
        return (
            <div>
                <p>Not Found</p>
            </div>
        );
    }

  const url =
    `https://deco-sites-blog-do-ramils.deno.dev/post/${blogPost.slug}`;
  const articleStructuredData =
    `{"@context":"https://schema.org","@type":"Article","name":"${blogPost.titleH1}","author":{"@type":"Person","name":"${blogPost.releaseInfo.author}","url":"${url}"},"datePublished":"${blogPost.releaseInfo.releaseDate}","image":"${blogPost.banner.image}","headline":"${blogPost.titleH1}","articleBody":"${blogPost.subTitle}"}`;

  const title = blogPost.titleH1 + ` | Blog do Ramils`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={blogPost.subTitle} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: articleStructuredData }}
      />

      <meta property="og:title" content={blogPost.titleH1} />
      <meta property="og:description" content={blogPost.subTitle} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={blogPost.banner.image} />
      <meta property="og:image:width" content={"320"} />
      <meta property="og:image:height" content={"160"} />
      <meta property="og:image:type" content="article" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:create" content={blogPost.releaseInfo.author} />
      <meta property="twitter:title" content={blogPost.titleH1} />
      <meta property="twitter:description" content={blogPost.subTitle} />
      <meta property="twitter:image" content={blogPost.banner.image} />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap"
        rel="stylesheet"
      />
    </>
  );
}
