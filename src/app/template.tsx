import Layout from "@/components/Layout";
import { Sidebar } from "@/components/Sidebar";

export default function Template({ children }: { children: React.ReactNode }) {
  return <Layout sidebar={<Sidebar />}>{children} </Layout>;
}
