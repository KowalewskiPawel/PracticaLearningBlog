import Link from "next/link";

import Wrapper from "./Wrapper";

export default function Post({ post }) {
  return (
    <Wrapper>
      <img src={post.frontmatter.cover_image} alt={post.title} />

      <div>Posted on {post.frontmatter.date}</div>
      <Link href={`/blog/${post.slug}`} passHref>
        <h3>{post.frontmatter.title}</h3>
      </Link>

      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`} passHref>
        <button>
          <p>Read More</p>
        </button>
      </Link>
    </Wrapper>
  );
}
