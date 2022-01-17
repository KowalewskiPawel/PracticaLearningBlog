import Link from "next/link";

import Wrapper from "./Wrapper";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <Wrapper>
        <img src={post.frontmatter.cover_image} alt={post.title} />

        <div>Posted on {post.frontmatter.date}</div>

        <h3>{post.frontmatter.title}</h3>
        <p>{post.frontmatter.excerpt}</p>
        <button>
          <p>Read More</p>
        </button>
      </Wrapper>
    </Link>
  );
}
