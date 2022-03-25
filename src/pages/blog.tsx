import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import { getImage } from 'gatsby-plugin-image'

interface DataProps {
  allContentfulPageBlogPost: {
    nodes: GatsbyTypes.ContentfulPageBlogPost[]
  }
}

const BlogIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const posts = data.allContentfulPageBlogPost.nodes
  const hero = getImage(posts[0].heroImage!.gatsbyImageData!)

  return (
    <Layout location={location}>
      <Seo title="Blog" />
      <Hero title="Blog" image={hero} />
      <ArticlePreview posts={posts} />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
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
  }
`
