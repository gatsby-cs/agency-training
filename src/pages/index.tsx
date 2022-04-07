import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout/layout'
import Hero from '../components/hero/hero'
import ArticlePreview from '../components/article-preview/article-preview'

import { PageProps } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import Container from '../components/container/container'

import * as styles from '../styles/pages/index.module.scss'

interface DataProps {
  allContentfulPageBlogPost: {
    nodes: GatsbyTypes.ContentfulPageBlogPost[]
  }
  contentfulEntityPerson: GatsbyTypes.ContentfulEntityPerson
}

const RootIndex: React.FC<PageProps<DataProps>> = ({ data, location }) => {
  const posts = data.allContentfulPageBlogPost.nodes
  const author = data.contentfulEntityPerson

  return (
    <Layout location={location}>
      <Container>
        <Hero
          title="Agency Training"
          image={
            author?.image?.gatsbyImageData &&
            getImage(author.image.gatsbyImageData)
          }
        />
        <ArticlePreview posts={posts} />
        <h2>Modules</h2>
        <div className={styles.modules}>
          <Link to="/profile">Profile</Link>
          <Link to="/form">Functions / Form</Link>
          <Link to="/gatsby-link">Gatsby Link</Link>
          <Link to="/ssr-profile">SSR Profile</Link>
          <Link to="/svg-imports">SVG Imports</Link>
          <Link to="/svg-sprites">SVG Sprites</Link>
          <Link to="/state-management">State Management</Link>
        </div>
      </Container>
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
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 330
            height: 115
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
    allContentfulInferComponent {
      nodes {
        name
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
          width: 1200
          quality: 100
        )
      }
    }
  }
`
