

import { themes as prismThemes } from 'prism-react-renderer';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MVT Boite à gestes',
  tagline: 'Comment concevoir des interactions réalistes et immersives en réalité virtuelle pour la manipulation d\'objets techniques, tout en prenant en compte la gestuelle et la résistance physique ?',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'MVT Boite à gestes',
        logo: {
          alt: 'MVT Boite à gestes',
          src: 'img/logo.svg',
        },

      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Florian COHEN-JOLY, Thomas CASTANIER,Maxime NICOLAS pour la CODING FACTORY by ESIEE-IT`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
