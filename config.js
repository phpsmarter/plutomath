const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://plutomath.gatsbyjs.io/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://avatars3.githubusercontent.com/u/10001670?v=4',
    logoLink: 'https://avatars3.githubusercontent.com/u/10001670?v=4',
    title:
      "M4MADS",
    githubUrl: 'https://www.github.com/phpsmarter/plutomath',
    helpUrl: '',
    tweetText: '',
    social: `<li></li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
      '/linearalgebra',
      '/calculus'

    ],
    collapsedNav: [
      '/codeblock',
      '/linearalgebra',
      '/calculus'// add trailing slash if enabled above
    ],
    links: [{ text: 'M4MADS', link: 'https://www.github.com/phpsmarter/plutomath' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "M4MADS",
  },
  siteMetadata: {
    title: 'PlutoMath',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'PlutoMath',
      short_name: 'PlutoMath',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
