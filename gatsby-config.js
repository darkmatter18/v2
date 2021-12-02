module.exports = {
  siteMetadata: {
    title: `Arkadip Bhattacharya`,
    titleTemplate: '%s | Arkadip',
    description: `A Computer science and Engineering student, 
    Deep Learning and Computer Vision 
    engineer and a web developer`,
    descriptionSmall: `Developer`,
    siteUrl: 'https://v2.arkadip.me',
    image: '/images/icon.png',
    author: `@darkmatter18`,
    twitterUsername: '@arkadipb21',
    social: {
      twitter: {
        url: 'https://twitter.com/arkadipb21',
        handle: '@arkadipb21',
      },
      github: {
        url: 'https://github.com/darmatter18',
        handle: '@darkmatter18',
      },
      linkedin: {
        url: 'https://www.linkedin.com/in/arkadip',
        handle: 'arkadip',
      },
      instagram: {
        url: 'https://www.instagram.com/__dark_matter/',
        handle: '@__dark_matter',
      },
      facebook: {
        url: 'https://www.facebook.com/arkadipb',
        handle: 'arkadipb',
      },
    },
  },
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-QQG8YE12BN'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Arkadip',
        short_name: 'Arkadip',
        start_url: '/',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
};
