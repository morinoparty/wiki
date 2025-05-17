import { sva } from "styled-system/css";

const postCta = sva({
  slots: ["root"],
  base: {
    root: {
      px: "90px",
      mb: "90px",
    },
  },
});
import { Cta } from "@/components/Cta";

export function PostCta() {
  const classes = postCta();
  return (
    <div className={classes.root}>
      <Cta />
    </div>
  );
}
