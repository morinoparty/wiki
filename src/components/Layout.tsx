import { sva } from "../../styled-system/css";
import { Footer } from "./Footer";

const layoutStyles = sva({
  slots: ["container", "sidebar", "main"],
  base: {
    container: {
      display: "grid",
      gridTemplateColumns: "300px 1fr",
      gridTemplateAreas: `
        "sidebar main"
        `,
      minHeight: "100vh",
      backgroundColor: "leaf.50",
    },
    sidebar: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridArea: "sidebar",
      padding: "20px",
      borderRight: "1px solid",
      borderColor: "leaf.200",
    },
    main: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridArea: "main",
    },
  },
});

export default function Layout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  const styles = layoutStyles();
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>{sidebar}</div>
      <div className={styles.main}>
        {children}
        <Footer />
      </div>
    </div>
  );
}
