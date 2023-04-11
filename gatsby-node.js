const path = require(`path`)
const axios = require('axios')
require("dotenv").config({
  path: ".env"
})

const BEZ_CATEGORII = 'bez-kategoriyi'

const languages = [
  {
    path: "/",
    code: "uk",
    wpmlLang: 'uk'
  },
  {
    path: "/ru/",
    code: "ru_RU",
    wpmlLang: 'ru'
  },
  {
    path: "/en/",
    code: "en_US",
    wpmlLang: 'en'
  },
]

const getProductCategoriesData = async () => {
  const { data } = await axios.get(`${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/products/categories?&lang=all&consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}&per_page=100`);
  return data
}



// const getAllProducts = async () => {
//   const { data } = await axios.get(`${process.env.GATSBY_WP_BASE_URL}/wp-json/wc/v3/products?consumer_key=${process.env.GATSBY_WOO_CONSUMER_KEY}&consumer_secret=${process.env.GATSBY_WOO_CONSUMER_SECRET}&lang=all&per_page=100`)
//   return data
// }


exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const blogPagination = await graphql(`
    query getPostsPagination {
      allWpPost(filter: {locale: {locale: {eq: "uk"}}}, limit: 20) {
        pageInfo {
          currentPage
          hasNextPage
          hasPreviousPage
          itemCount
          pageCount
          perPage
          totalCount
        }
      }
    }
  `)

  const singlePost = await graphql(`
    query getSinglePostsSlug {
      allWpPost(filter: {locale: {locale: {eq: "uk"}}}) {
        nodes {
          slug
          terms {
            nodes {
              slug
            }
          }
        }
      }
    }
  `)

  const productCategory = await graphql(`
    query getProductCategorySlug {
      allWpProductCategory(filter: {locale: {locale: {eq: "uk"}}}) {
        nodes {
          slug
        }
      }
    }
  `)

  const singleProduct = await graphql(`
    query getSingleProductSlug {
      allWpProduct(filter: {locale: {locale: {eq: "uk"}}}) {
        nodes {
          ... on WpVariableProduct {
            slug
            productCategories {
              nodes {
                slug
              }
            }
          }
          ... on WpSimpleProduct {
            slug
            productCategories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  `)

  const categoriesData = await getProductCategoriesData()

  // const getAllProductsData = await getAllProducts()


  languages.forEach(lang => {
    createPage({
      path: lang.path === '/' ? lang.path : lang.path.slice(0, -1),
      component: path.resolve("./src/templates/Homepage.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData,
        // products: getAllProductsData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}about-us`,
      component: path.resolve("./src/templates/About.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}configurator`,
      component: path.resolve("./src/templates/Configurator.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}contacts`,
      component: path.resolve("./src/templates/Contacts.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    new Array(blogPagination.data.allWpPost.pageInfo.pageCount).fill('').slice(1).forEach((_, index) => {
      createPage({
        path: `${lang.path}blog/page/${index + 2}`,
        component: path.resolve("./src/templates/BlogPagination.js"),
        context: {
          lang: lang.code,
          prefix: lang.path,
          langList: languages,
          wpmlLang: lang.wpmlLang,
          categories: categoriesData,
          skip: 21 * (index + 1)
        },
      })
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}blog`,
      component: path.resolve("./src/templates/Blog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData,
      },
    })
  })

  languages.forEach(lang => {
    productCategory.data.allWpProductCategory.nodes.forEach(category => {
      if (category.slug !== BEZ_CATEGORII) {
        createPage({
          path: `${lang.path}${category.slug}`,
          component: path.resolve("./src/templates/Category.js"),
          context: {
            lang: lang.code,
            prefix: lang.path,
            langList: languages,
            wpmlLang: lang.wpmlLang,
            slug: category.slug,
            categories: categoriesData
          },
        })
      } 
    })
  })

  languages.forEach(lang => {
    productCategory.data.allWpProductCategory.nodes.forEach(category => {
      if (category.slug !== BEZ_CATEGORII) {
        graphql(`
          query getCatPag($slug: String) {
            allWpProduct(filter: {locale: {locale: {eq: "uk"}}, productCategories: {nodes: {elemMatch: {slug: {eq: $slug}}}}} limit: 20) {
              pageInfo {
                currentPage
                hasNextPage
                hasPreviousPage
                itemCount
                pageCount
                perPage
                totalCount
              }
            }
          }
        `, { slug: category.slug }).then(({ data }) => {
          new Array(data.allWpProduct.pageInfo.pageCount).fill('').slice(1).forEach((_, index) => {
            createPage({
              path: `${lang.path}${category.slug}/page/${index + 2}`,
              component: path.resolve("./src/templates/CategoryPagination.js"),
              context: {
                lang: lang.code,
                prefix: lang.path,
                langList: languages,
                wpmlLang: lang.wpmlLang,
                slug: category.slug,
                categories: categoriesData,
                skip: 20 * (index + 1)
              },
            })
          })
        })
      }
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}goods`,
      component: path.resolve("./src/templates/Catalog.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}login`,
      component: path.resolve("./src/templates/Login.js"),
      context: {
        lang: lang.code,
        langList: languages,
        prefix: lang.path,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}registration`,
      component: path.resolve("./src/templates/Registration.js"),
      context: {
        lang: lang.code,
        langList: languages,
        prefix: lang.path,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}recovery`,
      component: path.resolve("./src/templates/Recovery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}thanks`,
      component: path.resolve("./src/templates/Thanks.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}checkout`,
      component: path.resolve("./src/templates/Checkout.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}account`,
      component: path.resolve("./src/templates/Account.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}account/history`,
      component: path.resolve("./src/templates/History.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}privacy-policy`,
      component: path.resolve("./src/templates/Privacy.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}terms`,
      component: path.resolve("./src/templates/Terms.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}sitemap`,
      component: path.resolve("./src/templates/Sitemap.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}usloviya-zakaza`,
      component: path.resolve("./src/templates/Delivery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}faq`,
      component: path.resolve("./src/templates/Faq.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}gallery`,
      component: path.resolve("./src/templates/Gallery.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: `${lang.path}search`,
      component: path.resolve("./src/templates/Search.js"),
      context: {
        lang: lang.code,
        prefix: lang.path,
        langList: languages,
        wpmlLang: lang.wpmlLang,
        categories: categoriesData
      },
    })
  })

  languages.forEach(lang => {
    singlePost.data.allWpPost.nodes.forEach(post => {
      createPage({
        path: `${lang.path}${post.slug}`,
        component: path.resolve("./src/templates/SinglePost.js"),
        context: {
          lang: lang.code,
          prefix: lang.path,
          langList: languages,
          wpmlLang: lang.wpmlLang,
          postSlug: post.slug,
          termSlug: post.terms.nodes[0].slug,
          categories: categoriesData,
        },
      })
    })
  })

  languages.forEach(lang => {
    singleProduct.data.allWpProduct.nodes.forEach(product => {
      if (product.slug !== 'constructor') {
        createPage({
          path: `${lang.path}${product.slug}`,
          component: path.resolve("./src/templates/SingleProduct.js"),
          context: {
            lang: lang.code,
            prefix: lang.path,
            langList: languages,
            wpmlLang: lang.wpmlLang,
            categories: categoriesData,
            productSlug: product.slug,
            termSlug:  product.productCategories && product.productCategories.nodes[0] ? product.productCategories.nodes[0].slug : ' ',
            // products: getAllProductsData,
          },
        })
      }
    })
  })
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: path.resolve("./node_modules/gapi-script/gapiScript.js"),
            use: loaders.null(),
          }
        ],
      },
    })
  }
}

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`
    deletePage(oldPage)
    createPage(page)
  }
}