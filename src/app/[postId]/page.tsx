import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { css } from "styled-system/css";
import { PostHeader } from "@/components/PostHeader";
import { PostBody } from "@/components/PostBody";
import { PostCta } from "@/components/PostCta";

// 動的ルートのパラメータ型
interface PageProps {
  params: { postId: string };
}

export default async function Page({ params }: PageProps) {
  if (!params.postId) return notFound();
  const post = await getPostBySlug(params.postId);
  if (!post) return notFound();

  return (
    <div
      className={css({
        width: "100%",
        minHeight: "100vh",
      })}
    >
      <PostHeader
        image={post.image}
        category={post.category}
        title={post.title}
        description={post.description}
      />
      <PostBody body={post.body} />
      <PostCta />
    </div>
  );
}
