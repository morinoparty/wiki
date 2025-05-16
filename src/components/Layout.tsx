import { sva } from "../../styled-system/css";

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
    },
    sidebar: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridArea: "sidebar",
      backgroundColor: "gray.200",
      padding: "20px",
    },
    main: {
      display: "grid",
      gridTemplateRows: "auto 1fr",
      gridArea: "main",
      backgroundColor: "white",
      padding: "20px",
      borderLeft: "1px solid gray",
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
      <div className={styles.main}>{children}</div>
    </div>
  );
}
