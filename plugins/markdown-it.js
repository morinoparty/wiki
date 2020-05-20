import MarkdownIt from "markdown-it";
import uslug from "uslug";
const uslugify = s => uslug(s);

export default ({ app }, inject) => {
  const md = require("markdown-it")({
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  })
    .use(require("markdown-it-fontawesome"))
    .use(require("markdown-it-anchor"), {
      permalink: true,
      slugify: uslugify
    })
    .use(require("markdown-it-table-of-contents"), {
      includeLevel: [1, 2, 3],
      slugify: uslugify
    });

};
