import { sva } from "styled-system/css";

const postBody = sva({
  slots: ["root"],
  base: {
    root: {
      pt: "48px",
      pb: "240px",
      px: "90px",
      maxWidth: "980px",
      mx: "auto",
    },
  },
});
import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { components } from "@/components/MDXRemoteComponents";

interface PostBodyProps {
  body: string;
}

export function PostBody({ body }: PostBodyProps) {
  const classes = postBody();
  return (
    <main className={classes.root}>
      <Suspense fallback={<div>Loading...</div>}>
        <MDXRemote
          source={body.replace(/<(["'][^"']*["']|[^'">])*>/g, "").replace(/[{}]/g, "")}
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
  );
}
