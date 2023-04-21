require('dotenv').config({
  path: '.env'
})

module.exports = {
  pathPrefix: "/ar-for-tehnotables",
   siteMetadata: {
    title: `Default title for Tehnotable web site`,
    description: `Default description for Tehnotable web site`,
    author: `Andrew`,
    siteUrl: `https://github.com/peopleh8/Tehnotable.git`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     host: '',
    //     sitemap: '',
    //     policy: [
    //       {
    //         userAgent: 'Googlebot',
    //         disallow: ''
    //       },
    //       {
    //         userAgent: 'Googlebot-image',
    //         disallow: ''
    //       }
    //     ]
    //   }
    // },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          allSitePage {
            nodes {
              path
            }
          }
          allWpContentNode(filter: {nodeType: {in: ["Post", "Page"]}}) {
            nodes {
              ... on WpPost {
                uri
                modifiedGmt
              }
              ... on WpPage {
                uri
                modifiedGmt
              }
            }
          }
        }
      `,
        resolveSiteUrl: () => process.env.GATSBY_SITE_DOMAIN,
        resolvePages: ({
          allSitePage: { nodes: allPages },
          allWpContentNode: { nodes: allWpNodes },
        }) => {
          const wpNodeMap = allWpNodes.reduce((acc, node) => {
            const { uri } = node
            acc[uri] = node

            return acc
          }, {})

          return allPages.map(page => {
            return { ...page, ...wpNodeMap[page.path] }
          })
        },
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: `${process.env.GATSBY_WP_BASE_URL}/graphql`,
        useACF: true,
        protocol: `https`,
        develop: {
          hardCacheMediaFiles: true,
        },
        production: {
          hardCacheMediaFiles: true,
        },
        auth: {
          htaccess: {
            username: process.env.GATSBY_WP_LOGIN,
            password: process.env.GATSBY_WP_PASSWORD,
          },
        },
        schema: {
          timeout: 10000000,
          perPage: 100, // currently set to 100
          requestConcurrency: 1, // currently set to 15
          previewRequestConcurrency: 5, // currently set to 5
        },
        type: {
          MediaItem: {
            localFile: {
              maxFileSizeBytes: 21485760,
              requestConcurrency: 1,
            },
          },
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tehnotable`,
        short_name: `Tehnotable`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#133BFE`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
        icon_options: {
          // For all the options available,
          // please see the section "Additional Resources" below.
          purpose: `any maskable`,
        },
      },
    },
    // `gatsby-plugin-preact`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ] ,

}
