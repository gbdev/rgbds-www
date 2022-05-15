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
  url: "https://gbdev.io",
  baseUrl: "/",
  onBrokenLinks: "error",
  onBrokenMarkdownLinks: "error",
  favicon: "img/favicon.ico",
  organizationName: "gbdev",
  projectName: "rgbds-www",

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          sidebarCollapsible: false,
          editUrl: `https://github.com/gbdev/rgbds-www2/edit/master`,
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
            href: "https://eldred.fr/gb-asm-tutorial/",
            label: "Tutorial",
            position: "left",
          },
          {
            href: "https://gbdev.io/pandocs",
            label: "Pan Docs",
            position: "left",
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
                href: "https://gbdev.io/list.html#introduction",
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
    }),
};

module.exports = config;
