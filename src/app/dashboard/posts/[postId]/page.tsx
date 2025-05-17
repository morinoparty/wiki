import { getAllPosts } from "@/lib/getAllPosts";
import { css } from "styled-system/css";

export default async function Home() {
  return (
    <div
      className={css({
        px: "90px",
        pt: "48px",
      })}
    ></div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    postId: post.slug,
  }));
}