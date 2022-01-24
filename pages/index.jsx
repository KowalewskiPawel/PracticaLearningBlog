import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";

import Post from "../components/Post";
import Posts from "../components/Posts";
import { sortByDate } from "../utils/sortByDate";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Practical Learning</title>
      </Head>

      <Posts>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Posts>
    </div>
  );
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
