import { MDXRemote } from "next-mdx-remote-client/rsc";
import { getPostBySlug } from "@/lib/getPostBySlug";
import { notFound } from "next/navigation";
import { css } from "styled-system/css";
import { Suspense } from "react";
import Link from "next/link";
import { Tag } from "lucide-react";
import Image from "next/image";

// 動的ルートのパラメータ型
interface PageProps {
  params: { postId: string };
}

export default async function Page({ params }: PageProps) {
  const post = await getPostBySlug(params.postId);
  if (!post) return notFound();

  // 必要に応じてカスタムコンポーネントを定義
  const components = {
    p: (props: React.ComponentProps<"p">) => (
      <p
        className={css({
          textStyle: "body",
          color: "leaf.700",
          my: "16px",
        })}
        {...props}
      />
    ),
    h1: (props: React.ComponentProps<"h1">) => (
      <h1
        className={css({
          fontSize: "32px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading1",
          mt: "32px",
          mb: "16px",
        })}
        {...props}
      />
    ),
    h2: (props: React.ComponentProps<"h2">) => (
      <h2
        className={css({
          fontSize: "28px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading2",
          mt: "28px",
          mb: "14px",
        })}
        {...props}
      />
    ),
    h3: (props: React.ComponentProps<"h3">) => (
      <h3
        className={css({
          fontSize: "24px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading3",
          mt: "24px",
          mb: "12px",
        })}
        {...props}
      />
    ),
    h4: (props: React.ComponentProps<"h4">) => (
      <h4
        className={css({
          fontSize: "20px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading4",
          mt: "20px",
          mb: "10px",
        })}
        {...props}
      />
    ),
    h5: (props: React.ComponentProps<"h5">) => (
      <h5
        className={css({
          fontSize: "18px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading5",
          mt: "18px",
          mb: "8px",
        })}
        {...props}
      />
    ),
    h6: (props: React.ComponentProps<"h6">) => (
      <h6
        className={css({
          fontSize: "16px",
          fontWeight: "bold",
          color: "leaf.700",
          textStyle: "heading6",
          mt: "16px",
          mb: "6px",
        })}
        {...props}
      />
    ),
    ul: (props: React.ComponentProps<"ul">) => (
      <ul
        className={css({
          pl: "24px",
          my: "16px",
          listStyle: "disc inside",
        })}
        {...props}
      />
    ),
    ol: (props: React.ComponentProps<"ol">) => (
      <ol
        className={css({
          pl: "24px",
          my: "16px",
          listStyle: "decimal inside",
        })}
        {...props}
      />
    ),
    li: (props: React.ComponentProps<"li">) => (
      <li
        className={css({
          mb: "8px",
        })}
        {...props}
      />
    ),
    a: (props: React.ComponentProps<"a">) => (
      <a
        className={css({
          color: "blue.600",
          textDecoration: "underline",
          _hover: { color: "blue.800" },
        })}
        {...props}
      />
    ),
    blockquote: (props: React.ComponentProps<"blockquote">) => (
      <blockquote
        className={css({
          borderLeft: "4px solid #A3C9A8",
          pl: "16px",
          color: "gray.700",
          fontStyle: "italic",
          my: "16px",
        })}
        {...props}
      />
    ),
    code: (props: React.ComponentProps<"code">) => (
      <code
        className={css({
          background: "gray.100",
          color: "gray.800",
          px: "4px",
          py: "2px",
          borderRadius: "4px",
          fontSize: "0.95em",
        })}
        {...props}
      />
    ),
    pre: (props: React.ComponentProps<"pre">) => (
      <pre
        className={css({
          background: "gray.100",
          color: "gray.800",
          px: "16px",
          py: "12px",
          borderRadius: "8px",
          overflowX: "auto",
          my: "16px",
        })}
        {...props}
      />
    ),
    img: (props: React.ComponentProps<"img">) => {
      const { src = "", alt = "", width, height, ...rest } = props;
      if (typeof src !== "string") return null;
      return (
        <Image
          src={src}
          alt={alt}
          width={width ? Number(width) : 800}
          height={height ? Number(height) : 600}
          style={{
            maxWidth: "100%",
            borderRadius: "8px",
            margin: "16px 0",
          }}
          {...rest}
        />
      );
    },
    hr: (props: React.ComponentProps<"hr">) => (
      <hr
        className={css({
          border: "none",
          borderTop: "1px solid #E2E8F0",
          my: "32px",
        })}
        {...props}
      />
    ),
    table: (props: React.ComponentProps<"table">) => (
      <table
        className={css({
          width: "100%",
          borderCollapse: "collapse",
          my: "24px",
        })}
        {...props}
      />
    ),
    thead: (props: React.ComponentProps<"thead">) => (
      <thead
        className={css({
          background: "gray.50",
        })}
        {...props}
      />
    ),
    tbody: (props: React.ComponentProps<"tbody">) => <tbody {...props} />,
    tr: (props: React.ComponentProps<"tr">) => (
      <tr
        className={css({
          borderBottom: "1px solid #E2E8F0",
        })}
        {...props}
      />
    ),
    th: (props: React.ComponentProps<"th">) => (
      <th
        className={css({
          fontWeight: "bold",
          textAlign: "left",
          px: "12px",
          py: "8px",
          background: "gray.100",
        })}
        {...props}
      />
    ),
    td: (props: React.ComponentProps<"td">) => (
      <td
        className={css({
          px: "12px",
          py: "8px",
        })}
        {...props}
      />
    ),
  };

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
      </header>
      <main
        className={css({
          pt: "48px",
          pb: "96px",
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
    </div>
  );
}
