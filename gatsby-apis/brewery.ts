const path = require('path')
import slugify from '@sindresorhus/slugify'

const createBreweryPages = async ({ graphql, createPage, reporter }) => {
  const breweryTemplate = path.resolve('./src/templates/brewery.tsx')

  const breweryPages = await graphql(
    `
      {
        allBrewery {
          nodes {
            breweryId
            name
          }
        }
      }
    `
  )

  if (breweryPages.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Brewery pages`,
      breweryPages.errors
    )
    return
  }

  const pages = breweryPages.data.allBrewery.nodes

  if (pages.length > 0) {
    pages.forEach((brewery, index) => {
      createPage({
        path: `/brewery/${slugify(brewery.name)}`,
        component: breweryTemplate,
        context: {
          id: brewery.breweryId,
        },
      })
    })
  }
}

export default createBreweryPages
