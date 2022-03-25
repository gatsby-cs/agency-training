import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

import { PageProps } from 'gatsby'

interface DataProps {
  allContentfulPageBlogPost: {
    nodes: GatsbyTypes.ContentfulPageBlogPost[]
  }
  contentfulEntityPerson: GatsbyTypes.ContentfulPerson
}

const RootIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const posts = data.allContentfulPageBlogPost.nodes
  const author = data.contentfulEntityPerson

  console.log(author)

  return <Layout location={location}>Training!</Layout>
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulPageBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    contentfulEntityPerson(contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" }) {
      name
      shortBio {
        shortBio
      }
      title
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 1180)
      }
    }
  }
`
