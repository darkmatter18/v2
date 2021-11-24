module.exports = {
  siteMetadata: {
    title: `Arkadip`,
    titleTemplate: '%s | Arkadip',
    description: `A Computer science and Engineering student, 
    Deep Learning and Computer Vision 
    engineer and a web developer`,
    siteUrl: 'https://v2.arkadip.me',
    image: '/images/icon.png',
    author: `@darkmatter18`,
    twitterUsername: '@arkadipb21',
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'G-WWVDK0DGB0',
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
