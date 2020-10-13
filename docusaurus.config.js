module.exports = {
  title: "Rust Learning",
  tagline: "by Karan",
  url: "https://karan-vk.github.io",
  baseUrl: "/rust-doc/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.svg",
  organizationName: "karan-vk", // Usually your GitHub org/user name.
  projectName: "rust-doc", // Usually your repo name.
  // themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
      additionalLanguages: ["rust"],
    },
    googleAnalytics: {
      trackingID: "UA-155281862-2",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
    navbar: {
      title: "Rust Learning",
      logo: {
        alt: "Rust Logo",
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
              label: "Get Started",
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
              href: "https://instagram.com/the.big_k/",
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
  plugins: [
    [
      "@docusaurus/plugin-pwa",
      {
        // debug: true,
        offlineModeActivationStrategies: ["appInstalled", "queryString"],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.png",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/rust-doc/manifest.json",
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(255, 89, 0)",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            tagName: "meta",
            name: "apple-mobile-web-app-status-bar-style",
            content: "#000",
          },
          {
            tagName: "link",
            rel: "apple-touch-icon",
            href: "/img/logo-512.png",
          },
          {
            tagName: "link",
            rel: "mask-icon",
            href: "/img/logo-512.svg",
            color: "rgb(37, 194, 160)",
          },
          {
            tagName: "meta",
            name: "msapplication-TileImage",
            content: "/img/logo-512.png",
          },
          {
            tagName: "meta",
            name: "msapplication-TileColor",
            content: "#000",
          },
        ],
      },
    ],
  ],
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
