module.exports = {
  siteMetadata: {
    title: `GHWI-Cookbook`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    //'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/static/assets`,
              name: 'images',
          },
  },
  {
      resolve: `gatsby-source-filesystem`,
          options: {
              path: `${__dirname}/content/recipes`,
              name: 'recipes',
          },
  },
  {
      resolve: `gatsby-transformer-remark`,
      options: {
          plugins: [
              'gatsby-remark-relative-images',
              {
                  resolve: `gatsby-remark-images`,
                  options: {
                      maxWidth: 590,
                  },
              },
          ],
      },
  },
    //'gatsby-transformer-remark',
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: `blog`,
    //     path: `${__dirname}/content/blog`,
    //   },
    // },
  //   {
  //     resolve: `gatsby-transformer-remark`,
  //     options: {
  //         plugins: [
  //             {
  //                 resolve: `gatsby-remark-images`,
  //                 options: {
  //                     maxWidth: 590,
  //                 },
  //             },
  //         ],
  //     },
  // },
  //    {
  //     resolve: 'gatsby-source-filesystem',
  //     options: {
  //       name: `recipes`,
  //       path: `${__dirname}/content/recipes`,
  //     },
  //   },

    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'pages',
    //     path: './src/pages/',
    //   },
    //   __key: 'pages',
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/static/assets`,
    //     name: 'images',
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `content`,
    //     path: `${__dirname}/content`,
    //   },
    // },
  ],
};
