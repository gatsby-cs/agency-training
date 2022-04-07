import createBreweryPages from './gatsby-apis/brewery'
import createFlexPages from './gatsby-apis/flex-page'

const path = require('path')
const fetch = require('node-fetch')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  createBreweryPages({ graphql, createPage, reporter })
  createFlexPages({ graphql, createPage, reporter })

  // Define a template for blog post
  const blogPost = path.resolve('./src/templates/blog-post.tsx')
  const badBlogPost = path.resolve('./src/templates/bad-blog-post.tsx')

  const result = await graphql(
    `
      {
        allContentfulPageBlogPost {
          nodes {
            slug
          }
        }
      }
    `
  )

  // slower
  // memory problems
  // cache invalidation problems

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulPageBlogPost.nodes

  // Create blog posts pages
  // But only if there's at least one blog post found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        defer: index > 0,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}

exports.createSchemaCustomization = async ({ actions, schema }) => {
  const { createTypes } = actions

  const typeDefs = `
  type ContentfulInferComponent implements Node {
    name: String!
  }

  type Geo {
    lat: String
    lng: String
  }
  `

  createTypes(typeDefs)
}

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const data = await fetch(`https://api.openbrewerydb.org/breweries`) // 20 items
  const breweries = await data.json()
  const POST_NODE_TYPE = `Brewery`
  breweries.forEach((brewery, i) => {
    createNode({
      ...brewery,
      breweryId: brewery.id,
      id: createNodeId(`${POST_NODE_TYPE}-${brewery.id}`),
      parent: null,
      children: [],
      internal: {
        type: POST_NODE_TYPE,
        content: JSON.stringify(brewery),
        contentDigest: createContentDigest(brewery),
      },
    })
  })
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    Brewery: {
      geo: {
        type: 'Geo',
        resolve: (source, args, context, info) => {
          return {
            lat: source.latitude,
            lng: source.longitude,
          }
        },
      },
      hero: {
        type: 'ContentfulComponentHero',
        resolve(source, args, context, info) {
          return context.nodeModel.getNodeById({
            id: '3392c50c-b934-50a6-8d79-f57dfb6fa751',
            type: 'ContentfulComponentHero',
          })
        },
      },
    },
  }
  createResolvers(resolvers)
}
