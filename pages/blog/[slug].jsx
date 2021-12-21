import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

import PostPageWrapper from "../../components/PostPageWrapper";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <PostPageWrapper>
      <button>
        <Link href='/' passHref>
          <p>Go Back</p>
        </Link>
      </button>
      <h1>{title}</h1>
      <div className='post-date'>Posted on {date}</div>
      <img src={cover_image} alt={title} />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </PostPageWrapper>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
