import Link from "next/link";

import Wrapper from "./Wrapper";

export default function Post({ post }) {
  return (
    <Wrapper>
      <img src={post.frontmatter.cover_image} alt='' />

      <div>Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>
      <button>
        <Link href={`/blog/${post.slug}`} passHref>
          <p>Read More</p>
        </Link>
      </button>
    </Wrapper>
  );
}
