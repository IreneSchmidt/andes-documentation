import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Andes',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http://localhost:3000/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/andes-documentation/',
  projectName: 'andes-documentation', // Usually your repo name.
  //deploymentBranch:"main",
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Andes',
      logo: {
        src: 'img/icon96.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'backlog',
          position: 'left',
          label: 'Backlog',
        },
        {
          type: 'docSidebar',
          sidebarId: 'comunicacao',
          position: 'left',
          label: 'Comunicação',
        },
        {
          type: 'docSidebar',
          sidebarId: 'disc',
          position: 'left',
          label: 'DISC',
        },
  
   
      
        {
          type: 'docSidebar',
          sidebarId: 'pmc',
          position: 'left',
          label: 'PMC',
        },
        {
          type: 'docSidebar',
          sidebarId: 'team_topology',
          position: 'left',
          label: 'Team Topology',
        },
      
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
