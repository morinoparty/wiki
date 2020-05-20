import MarkdownIt from "markdown-it";
import uslug from "uslug";
const uslugify = s => uslug(s);

export default ({ app }, inject) => {
  const md = new MarkdownIt({
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  });
  md.use(require("markdown-it-fontawesome"));
  md.use(require("markdown-it-anchor"), { permalink: true, slugify: uslugify });
  md.use(require("markdown-it-table-of-contents"), {
    includeLevel: [1, 2, 3],
    slugify: uslugify
  });
  inject("md", md);
};
