// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  nav: [
    "index",
    {
      type: "category",
      label: "Supported OSes",
      collapsible: false,
      items: [
        "linux",
        "macos",
        "windows",
      ],
    },
    "source",
    "master",
  ],
};

module.exports = sidebars;
