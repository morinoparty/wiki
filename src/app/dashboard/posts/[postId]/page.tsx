import { MilkdownEditor } from "@/components/Editor";
import { PostHeader } from "@/components/PostHeader";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { css } from "styled-system/css";

interface PageProps {
  params: { postId: string };
}

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.postId);
  if (!post) return notFound();
  return (
    <div>
      <PostHeader
        image={post.image}
        category={post.category}
        title={post.title}
        description={post.description}
      />
      <div
        className={css({
          px: "90px",
          pt: "48px",
        })}
      >
        <MilkdownEditor defaultValue={post.body} />
      </div>
    </div>
  );
}
