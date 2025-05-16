import { sva } from "styled-system/css";
import { WikiPost } from "../lib/getAllPosts";

const wikiCardStyles = sva({
  slots: [
    "card",
    "container",
    "title",
    "description",
    "date",
    "category",
    "image",
  ],
  base: {
    card: {
      display: "grid",
      gridTemplateRows: "auto auto",
      gap: "16px",
      width: "100%",
      height: "fit-content",
    },
    container: {},
    title: {
      height: "fit-content",
      fontSize: "18px",
      fontWeight: "bold",
      textStyle: "button",
      color: "leaf.700",
    },
    description: {
      textStyle: "body",
      fontSize: "14px",
    },
    image: {
      width: "100%",
      aspectRatio: "16/9",
      height: "fit-content",
      borderRadius: "10px",
      bg: "leaf.200",
    },
  },
});

export default function WikiCard({ post }: { post: WikiPost }) {
  const styles = wikiCardStyles();
  return (
    <article className={styles.card}>
      <img className={styles.image} src={post.image || "/"} alt={post.title} />

      <div className={styles.container}>
        <h2 className={styles.title}>{post.title}</h2>
      </div>
    </article>
  );
}
