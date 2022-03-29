import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import ArticlePreview from '../components/article-preview/article-preview'

import { PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'

interface DataProps {
  allContentfulPageBlogPost: {
    nodes: GatsbyTypes.ContentfulPageBlogPost[]
  }
  contentfulEntityPerson: GatsbyTypes.ContentfulEntityPerson
}

const RootIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const posts = data.allContentfulPageBlogPost.nodes
  const author = data.contentfulEntityPerson
  console.log(author)

  return (
    <Layout location={location}>
      <Hero
        title="Agency Training"
        image={
          author?.image?.gatsbyImageData &&
          getImage(author.image.gatsbyImageData)
        }
      />
      <ArticlePreview posts={posts} />
    </Layout>
  )
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
    contentfulEntityPerson(contentful_id: { eq: "2037iqVH7K7LXMOUBAiztV" }) {
      name
      shortBio {
        shortBio
      }
      title
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          formats: [AUTO, WEBP]
          placeholder: BLURRED
          width: 1440
          quality: 100
        )
      }
    }
  }
`
