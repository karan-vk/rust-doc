module.exports = {
  title: "Rust Learning",
  tagline: "by Karan",
  url: "https://karan-vk.github.io",
  baseUrl: "/rust-doc/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.svg",
  organizationName: "karan-vk", // Usually your GitHub org/user name.
  projectName: "rust-doc", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Rust Learning",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/karan-vk/rust-doc",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/",
            },
            {
              label: "Second Doc",
              to: "docs/doc2/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github",
              href: "https://github.com/karan-vk",
            },
            {
              label: "Instagram",
              href: "instagram.com/the.big_k/",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/karan-vk/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Found a typo ??",
              href: "https://github.com/karan-vk/rust-doc",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Rust learning, Inc. Built with React.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/karan-vk/rust-doc/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/karan-vk/rust-doc/edit/master/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
