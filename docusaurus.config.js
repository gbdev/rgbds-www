// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RGBDS',
  tagline: 'A free assembler/linker package for the Game Boy and Game Boy Color',
  url: 'https://gbdev.io',
  baseUrl: '/rgbds-www2/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gbdev',
  projectName: 'rgbds-www2',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          editUrl: `https://github.com/gbdev/rgbds-www2/edit/master`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      navbar: {
        title: 'RGBDS',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'left',
            label: 'Docs',
          },
          {
            to: '/faq',
            position: 'left',
            label: 'FAQ',
          },
          {
            to: '/install',
            position: 'left',
            label: 'Install',
          },
          {href: 'https://eldred.fr/gb-asm-tutorial/', label: 'Tutorial', position: 'left'},
          {href: 'https://gbdev.io/pandocs', label: 'Pan Docs', position: 'left'},

          {
            href: 'https://github.com/gbdev/rgbds',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'GB ASM Tutorial',
                href: 'https://eldred.fr/gb-asm-tutorial/',
              },
              {
                label: 'Game Boy technical reference',
                href: 'https://gbdev.io/pandocs',
              },
            ],
          },

          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.io/gbdev',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gbdev0',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Homebrew Games',
                href: 'https://hh.gbdev.io/',
              },
              {
                label: 'Game Boy Development resources',
                href: 'https://gbdev.io/list.html#introduction',
              }
            ],
          },
        ],
        copyright: `Game Boy is a registered trademark. This project is not endorsed by Nintendo.<br/> Copyright © 1997-${new Date().getFullYear()} RGBDS contributors.`,
      },
      announcementBar: {
        id: 'announcementBar-1', // Increment on change
        content: `⭐️ Welcome to the new RGBDS website! Please report any issue <a target="_blank" rel="noopener noreferrer" href=" https://github.com/gbdev/rgbds-www">GitHub</a> and follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/gbdev0">Twitter </a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },

    }),
};

module.exports = config;
