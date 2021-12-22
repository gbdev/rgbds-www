// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'RGBDS',
  tagline: 'A free assembler/linker package for the Game Boy and Game Boy Color',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/rgbds-www2/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'avivace', // Usually your GitHub org/user name.
  projectName: 'rgbds-www2', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
            docId: '1',
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
          {
            href: 'https://github.com/gbdev/rgbds',
            label: 'GitHub',
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
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RGBDS contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
