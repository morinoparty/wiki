import { getAllPosts } from "@/lib/getAllPosts";

export default async function Home() {
  const posts = await getAllPosts();

  console.log(posts);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
