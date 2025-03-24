import { defineConfig } from "vitepress";

export default defineConfig({
  title: "硬件知识库",
  titleTemplate: "✈️",
  description: "什么时候硬件对我来说才有吸引力呢",
  lang: "zh",
  head: [["link", { rel: "icon", href: "/favicon.svg" }]],
  cleanUrls: true,
  srcDir: "src",
  lastUpdated: true,
  sitemap: {
    hostname: "https://hardware.tianheg.org",
  },
  metaChunk: true,

  themeConfig: {
    outline: [2, 3],
    // nav: [
    //   todaysReview(),
    //   { text: "Book", link: "/" },
    //   { text: "Non-book", link: "/non-book/", activeMatch: "/non-book/" },
    // ],
    search: {
      provider: "local",
    },
    sidebar: {
      // "/": { base: "/", items: sidebarHome() },
    },
    editLink: {
      pattern: "https://github.com/tianheg/hardware/edit/main/src/:path",
      text: "Edit page",
    },
  },
});
