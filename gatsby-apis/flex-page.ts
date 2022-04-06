const path = require('path')

const createFlexPages = async ({ graphql, createPage, reporter }) => {
  const flexTemplate = path.resolve('./src/templates/flex-page.tsx')

  const flexPages = await graphql(
    `
      {
        allContentfulPageFlexPage {
          nodes {
            slug
          }
        }
      }
    `
  )

  if (flexPages.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful flex pages`,
      flexPages.errors
    )
    return
  }

  const pages = flexPages.data.allContentfulPageFlexPage.nodes

  if (pages.length > 0) {
    pages.forEach((post, index) => {
      createPage({
        path: `${post.slug}`,
        component: flexTemplate,
        context: {
          slug: post.slug,
        },
      })
    })
  }
}

export default createFlexPages
