import path from 'path'
import nodeFetch from 'node-fetch'
import createFlexPages from './gatsby-apis/flex-page'

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  await createFlexPages({ graphql, createPage, reporter })

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
      createPage({
        path: `/blog/${post.slug}/`,
        component: blogPost,
        context: {
          slug: post.slug,
        },
      })
    })
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

    posts.forEach((post, index) => {
      const previousPostSlug = index === 0 ? null : posts[index - 1].slug
      const nextPostSlug =
        index === posts.length - 1 ? null : posts[index + 1].slug

      createPage({
        path: `/bad-blog/${post.slug}/`,
        component: badBlogPost,
        context: {
          slug: post.slug,
          previousPostSlug,
          nextPostSlug,
        },
      })
    })
  }
}

export const sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  const data = await nodeFetch(`https://api.openbrewerydb.org/breweries`)
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

// exports.createResolvers = ({ createResolvers }) => {
//   const resolvers = {
//     Brewery: {
//       hero: {
//         type: 'ContentfulComponentHero',
//         resolve(source, args, context, info) {
//           return context.nodeModel.getNodeById({
//             id: '3392c50c-b934-50a6-8d79-f57dfb6fa751',
//             type: 'ContentfulComponentHero',
//           })
//         },
//       },
//     },
//   }
//   createResolvers(resolvers)
// }

// exports.createSchemaCustomization = ({ actions, schema }) => {
//   const { createTypes } = actions

//   const typeDefs = [
//     'type Brewery implements Node { hero: ContentfulComponentHero, fullAddress: String }',
//     schema.buildObjectType({
//       name: 'Brewery',
//       fields: {
//         hero: {
//           type: 'ContentfulComponentHero',
//           resolve: (source, args, context, info) => {
//             // source is the instance in question at the time of the query
//             // source.heroId
//             return context.nodeModel.findOne({
//               type: 'ContentfulComponentHero',
//               query: {
//                 filter: { id: { eq: '3392c50c-b934-50a6-8d79-f57dfb6fa751' } },
//               },
//             })
//           },
//         },
//       },
//     }),
//   ]

//   createTypes(typeDefs)
// }
