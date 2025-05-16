import { WikiPost } from "@/lib/getAllPosts";

export default function WikiCard({ post }: { post: WikiPost }) {
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.date}</p>
      <p>{post.category}</p>
      {post.image && <img src={post.image} alt={post.title} />}
    </div>
  );
}
