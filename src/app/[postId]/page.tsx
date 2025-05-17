import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { css } from "styled-system/css";
import { Suspense } from "react";
import Link from "next/link";
import { Tag } from "lucide-react";
import { components } from "@/components/MDXRemoteComponents";
import { Cta } from "@/components/Cta";
import { getAllPosts } from "@/lib/getAllPosts";

// 動的ルートのパラメータ型
interface PageProps {
  params: Promise<{ postId: string }>;
}

export default async function Page({ params }: PageProps) {
  const { postId } = await params;
  const post = await getPostBySlug(postId);
  if (!post) return notFound();

  return (
    <div
      className={css({
        width: "100%",
        minHeight: "100vh",
      })}
    >
      <header>
        <div
          className={css({
            px: "90px",
            maxWidth: "980px",
            mx: "auto",
            py: "48px",
          })}
        >
          <p
            className={css({
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textStyle: "body",
              color: "leaf.600",
              mb: "42px",
            })}
          >
            <Tag width={16} />
            <Link href={`/category/${post.category}`}>{post.category}</Link>
          </p>
          <h1
            className={css({
              fontSize: "40px",
              fontWeight: "bold",
              color: "leaf.700",
              textStyle: "heading1",
              mb: "24px",
            })}
          >
            {post.title}
          </h1>
          <p
            className={css({
              textStyle: "body",
              color: "leaf.600",
            })}
          >
            {post.description}
          </p>
        </div>

        {post.image && (
          <div
            className={css({
              width: "100%",
              minHeight: "420px",
              backgroundImage: "url('/assets/top-header.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            })}
            style={{
              backgroundImage: `url(${post.image})`,
            }}
          ></div>
        )}
      </header>
      <main
        className={css({
          pt: "48px",
          pb: "128px",
          px: "90px",
          maxWidth: "980px",
          mx: "auto",
        })}
      >
        {/* MDX本文をレンダリング */}
        <Suspense fallback={<div>Loading...</div>}>
          <MDXRemote
            source={post.body
              .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
              .replace(/[{}]/g, "")}
            components={components}
            options={{
              mdxOptions: {
                remarkPlugins: [],
                rehypePlugins: [],
              },
            }}
          />
        </Suspense>
      </main>

      <div
        className={css({
          px: "90px",
          mb: "90px",
        })}
      >
        <Cta />
      </div>
    </div>
  );
}


export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    postId: post.slug,
  }));
}