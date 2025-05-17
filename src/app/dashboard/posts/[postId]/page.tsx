import { MilkdownEditor } from "@/components/Editor";
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
    <div
      className={css({
        px: "90px",
        pt: "48px",
      })}
    >
      <MilkdownEditor defaultValue={post.body} />
    </div>
  );
}
