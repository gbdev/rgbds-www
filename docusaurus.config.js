// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {
  versions: versionList,
  latestStable,
} = require("./src/components/versions.js");

const versions = {
  current: {
    label: "master",
    path: "master",
  },
};
// Force the latest stable not to be at the docs' root
versions[latestStable] = {
  path: latestStable,
};

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RGBDS",
  tagline:
    "A free assembler/linker package for the Game Boy and Game Boy Color",
  url: "https://rgbds.gbdev.io",
  baseUrl: "/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  favicon: "img/favicon.ico",
  organizationName: "gbdev",
  projectName: "rgbds-www",

  plugins: [
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          "gbz80.7",
          "rgbasm.1",
          "rgbasm.5",
          "rgbds.5",
          "rgbds.7",
          "rgbfix.1",
          "rgbgfx.1",
          "rgblink.1",
          "rgblink.5",
        ].map((page) => {
          return { from: `/docs/${page}`, to: `/docs/${latestStable}/${page}` };
        }),
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          // The upstream source of these pages' actual content is the man pages in the main repo, not the renders
          editUrl: function (info) {
            const match = /^(.+\.[157])\.md$/i.exec(info.docPath);
            return match
              ? `https://github.com/gbdev/rgbds/edit/master/man/${match[1]}` // It's only possible to edit on a branch
              : `https://github.com/gbdev/rgbds-www/edit/master/${info.versionDocsDirPath}/${info.docPath}`;
          },
          lastVersion: latestStable,
          versions,
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: "og:image", content: "https://rgbds.gbdev.io/img/logo.png" },
        { name: "twitter:site", content: "@gbdev0" },
      ],
      navbar: {
        title: "RGBDS",
        logo: {
          alt: "RGBDS logo",
          src: "img/logo.svg",
        },
        items: [
          {
            to: "/docs",
            position: "left",
            label: "Docs",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            dropdownActiveClassDisabled: true,
          },
          {
            to: "/faq",
            position: "left",
            label: "FAQ",
          },
          {
            to: "/install",
            position: "left",
            label: "Install",
          },

          {
            href: "https://github.com/gbdev/rgbds",
            className: "header-github-link",
            "aria-label": "GitHub repository",
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
                label: "GB ASM Tutorial",
                href: "https://eldred.fr/gb-asm-tutorial/",
              },
              {
                label: "Game Boy technical reference",
                href: "https://gbdev.io/pandocs",
              },
            ],
          },

          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.io/gbdev",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/gbdev0",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Homebrew Games",
                href: "https://hh.gbdev.io/",
              },
              {
                label: "Game Boy Development resources",
                href: "https://gbdev.io/resources.html",
              },
            ],
          },
        ],
        copyright: `Game Boy is a registered trademark. This project is not endorsed by Nintendo.<br/> Copyright © 1997-${new Date().getFullYear()} RGBDS contributors.`,
      },
      announcementBar: {
        id: "announcementBar-1", // Increment on change
        content: `⭐️ Welcome to the new RGBDS website! Please report any issues <a target="_blank" rel="noopener noreferrer" href="https://github.com/gbdev/rgbds-www/issues">on GitHub</a>, and <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gbdev0">follow us on Twitter</a>!`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // Settings provided by Algolia
        appId: "1P240E1YI0",
        // Public API key: it is safe to commit it
        apiKey: "5f4297895f785d82d62d769d247d5e67",
        indexName: "gbdev",

        // It ensures that search results are relevant to the current language and version.
        contextualSearch: true,
      },
    }),
};

module.exports = config;
