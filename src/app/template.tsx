import Layout from "@/components/Layout";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Layout sidebar={<div>もりぱうぃき</div>}>{children} </Layout>;
}
